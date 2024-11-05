import { useFormik } from "formik";
import { Modal, Button, TextField, Box } from "@mui/material";
import * as Yup from "yup";
import axiosInstance from "../config/axiosInstance";
import { useState } from "react";
import { toast } from "sonner";

const AddInstanceModal = ({ open, handleClose, setNewInstance }) => {
  const [participantTypes, setParticipantTypes] = useState([""]); 
  const [tickets, setTickets] = useState([""]); 

  const validationSchema = Yup.object({
    instanceName: Yup.string().required("Instance Name is required"),
    alloted: Yup.number()
      .required("Alloted is required")
      .positive("Alloted must be a positive number")
      .integer("Alloted must be an integer"),
  });

  const formik = useFormik({
    initialValues: {
      instanceName: "",
      alloted: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axiosInstance.post("/add-instance", {
          ...values,
          participantTypes,
          tickets,
        });
        setNewInstance(response.data.instanceData[0]);
        toast.success("Instance added successfully!");
        formik.resetForm(); 
        setParticipantTypes([""]); 
        setTickets([""]);
        handleClose(); 
      } catch (error) {
        console.error("Error submitting data:", error);
        toast.error("Failed to add instance.");
      }
    },
  });

  const handleParticipantTypeChange = (index, value) => {
    const newParticipantTypes = [...participantTypes];
    newParticipantTypes[index] = value;
    setParticipantTypes(newParticipantTypes);
  };

  const handleTicketChange = (index, value) => {
    const newTickets = [...tickets];
    newTickets[index] = value;
    setTickets(newTickets);
  };

  const addParticipantType = () => {
    setParticipantTypes([...participantTypes, ""]);
  };

  const removeParticipantType = (index) => {
    const newParticipantTypes = participantTypes.filter((_, i) => i !== index);
    setParticipantTypes(newParticipantTypes);
  };

  const addTicket = () => {
    setTickets([...tickets, ""]);
  };

  const removeTicket = (index) => {
    const newTickets = tickets.filter((_, i) => i !== index);
    setTickets(newTickets);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          width: 400,
          maxHeight: "80vh", // Set max height for the modal
          bgcolor: "background.paper",
          p: 4,
          borderRadius: "8px",
          boxShadow: 24,
          margin: "auto",
          mt: "100px",
          overflowY: "auto", // Allow vertical scrolling
        }}
      >
        <h2>Add Instance</h2>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Instance Name"
            name="instanceName"
            value={formik.values.instanceName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.instanceName && Boolean(formik.errors.instanceName)
            }
            required
          />
          {participantTypes.map((type, index) => (
            <div key={index}>
              <TextField
                fullWidth
                margin="normal"
                label={`Participant Type ${index + 1}`}
                value={type}
                onChange={(e) => handleParticipantTypeChange(index, e.target.value)}
                error={
                  !type && Boolean(formik.touched.participantTypes) // check for empty field
                }
                required
              />
              <Button variant="outlined" onClick={() => removeParticipantType(index)}>
                Remove
              </Button>
            </div>
          ))}
          <Button variant="outlined" onClick={addParticipantType}>
            Add Participant Type
          </Button>

          {tickets.map((ticket, index) => (
            <div key={index}>
              <TextField
                fullWidth
                margin="normal"
                label={`Ticket ${index + 1}`}
                value={ticket}
                onChange={(e) => handleTicketChange(index, e.target.value)}
                error={
                  !ticket && Boolean(formik.touched.tickets) // check for empty field
                }
                required
              />
              <Button variant="outlined" onClick={() => removeTicket(index)}>
                Remove
              </Button>
            </div>
          ))}
          <Button variant="outlined" onClick={addTicket}>
            Add Ticket
          </Button>

          <TextField
            fullWidth
            margin="normal"
            label="Alloted"
            name="alloted"
            type="number"
            value={formik.values.alloted}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.alloted && Boolean(formik.errors.alloted)}
            required
          />
          <Button type="submit" variant="contained" color="primary">
            Add Instance
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default AddInstanceModal;
