Here's an updated `README.md` file tailored to meet the requirements you've shared:

```markdown
# Instance Check-in

## Description
Instance Check-in is a web application designed to facilitate the check-in process for events, meetings, or any gatherings. Users can register for an event, check in, view their attendance history, and manage instances through a simple CRUD interface. The application aims to streamline the check-in process, making it easier for organizers to manage attendees and for participants to keep track of their events.

## Design Requirement
The UI of this application is visually consistent with the provided Figma prototype. Please refer to the Figma design for detailed UI specifications:

[**Figma Design**](https://www.figma.com/design/Z9HE1UhPrE5KJhdOPAIulf/Test?node-id=6-329&node-type=canvas&t=MCE2cCvz0o9K9Ksk-0)

## Functionality Requirement
The application implements a simple CRUD (Create, Read, Update, Delete) functionality:
- **Create:** Users can add new instances.
- **Read:** Users can view all instances and their details.
- **Update:** Users can update existing instances.
- **Delete:** Users can delete instances as needed.

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- React.js
- Bootstrap
- Formik

## Installation Instructions

To set up the project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AnanthuSpace/instance-checkin.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd instance-checkin
   ```

3. **Install server dependencies:**
   ```bash
   cd Server
   npm install
   ```

4. **Install client dependencies:**
   ```bash
   cd ../Client
   npm install
   ```

5. **Set up environment variables:**
   Create a `.env` file in the `server` directory and add your environment variables (e.g., database connection string, JWT secret).

6. **Start the server:**
   ```bash
   cd Server
   npm start
   ```

7. **Start the client:**
   Open a new terminal, navigate to the `Client` directory, and run:
   ```bash
   npm start
   ```

## Usage
- **Register:** Users can create an account to register for events.
- **Check-in:** Registered users can check in for events using their credentials.
- **Manage Instances:** Users can add, view, update, and delete instances through the UI.

## Contributing
Contributions are welcome! If you would like to contribute to the project, please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Create a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact Information
For any questions or support, please reach out to:
- **Name:** Ananthu Mohan
- **Email:** ananthumohan368@gmail.com
```

### Instructions to Add the README:
1. Open your text editor or IDE.
2. Copy the above content.
3. Create a new file and name it `README.md`.
4. Paste the copied content into the file.
5. Save the file in the root directory of your repository.

This README now includes the specific functionality requirements and mentions the Figma design link. If you need any further adjustments or additional sections, feel free to ask!
