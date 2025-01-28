# DrCare - Doctor Appointment System

DrCare is a MEAN stack-based web application designed to simplify the process of booking doctor appointments. With features like user authentication, online appointment booking, integrated Google Maps for location guidance, and a user-friendly appointment form, DrCare ensures a seamless and efficient experience for patients.

## Features

1. **User Authentication**

   - Secure login functionality using email and password.
   - Protects user data with encryption.

2. **Doctor Appointment Booking**

   - Browse available doctors and their schedules.
   - Book appointments online with a simple form.

3. **Google Maps Integration**

   - Locate clinics/hospitals easily with embedded Google Maps.
   - Get directions and estimated travel times.

4. **User-Friendly Appointment Form**

   - Collects necessary details like patient name, contact information, preferred date and time, and symptoms.

5. **Responsive Design**

   - Fully responsive interface built with complete custom CSS.

## Technologies Used

- **Frontend**: Angular, HTML, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Maps Integration**: Google Maps API

## Installation Guide

1. **Clone the Repository**

   ```bash
   git clone https://github.com/divakar-srinivasan/Angular-Dr.Care-fullstack.git
   cd Angular-Dr.Care-fullstack
   ```

2. **Install Dependencies**

   - Install server-side dependencies:
     ```bash
     cd backend
     npm install
     ```
   - Install client-side dependencies:
     ```bash
     cd client
     npm install
     ```

3. **Set Up Environment Variables**
   Create a `.env` file in the `backend` directory with the following:

   ```env
   PORT=4200
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   ```

4. **Run the Application**

   - Start the backend server:
     ```bash
     cd backend
     node index
     ```
   - Start the frontend:
     ```bash
     cd client
     ng serve
     ```

   The application will be accessible at `http://localhost:4200`.

## Screenshots
![Screenshot 2025-01-28 142008](https://github.com/user-attachments/assets/fb0ba18d-2f3d-4666-9948-610ce2c3959f)

1. **Login Page**
![Screenshot 2025-01-28 142139](https://github.com/user-attachments/assets/3751f200-3122-42a6-a8fe-bf4994cfad6e)

2. **Doctor List Page**
![Screenshot 2025-01-28 142103](https://github.com/user-attachments/assets/2d92fd4c-109e-46b4-9115-93044407028d)

3. **Appointment Form**
![Screenshot 2025-01-28 142042](https://github.com/user-attachments/assets/799743d2-a8f5-4567-8860-d6bf873d842f)

4. **Google Maps Integration**
![Screenshot 2025-01-28 142139](https://github.com/user-attachments/assets/f5ddae6f-bcef-42d6-b465-4f25ce35f6f3)

## Custom CSS Highlights

- Unique, modern, and clean interface with complete custom CSS.
- Fully responsive design for mobile, tablet, and desktop devices.

## Future Enhancements

- **Doctor Dashboard**: Allow doctors to manage their schedules and appointments.
- **Payment Integration**: Enable patients to pay for appointments online.
- **Notification System**: Send email/SMS reminders for appointments.
- **Rating and Reviews**: Allow users to leave feedback for doctors.

## Contribution Guidelines

1. Fork the repository.
2. Create a new branch for your feature/bug fix.
3. Commit your changes with a descriptive message.
4. Push your branch and create a Pull Request.


## Contact

For any queries or support, feel free to reach out:

- **Email**: [sdivakar2005@gmail.com](mailto\:yourname@example.com)
- **GitHub**: [divkar-srnivasan](https://github.com/divakar-srinivasan)


Made with ❤️ by DIVAKAR S.



