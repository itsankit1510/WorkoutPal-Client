# WorkoutPal Client

WorkoutPal is an intelligent fitness companion that creates personalized workout plans for running, cycling, and gym training. Using AI and knowledge base of sports research and literature, WorkoutPal delivers tailored fitness programs based on your individual profile and goals.

## Features

- **Personalized Workout Plans**: Get custom training programs based on your fitness level, goals, and preferences
- **Multiple Disciplines**: Supports running, cycling, and gym workouts
- **AI-Powered**: Training plans generated using machine learning models based on professional sports research
- **Progress Tracking**: Monitor your improvements and adjust plans accordingly
- **Smart Adaptation**: Plans evolve based on your performance and feedback

## Getting Started

### Prerequisites

- Node.js (v18.0 or higher)
- npm (v8.0 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/workout-pal-client.git
cd workout-pal-client
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following content:
```env
REACT_APP_BACKEND_URL=http://localhost:8080
```

4. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:5173`

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| REACT_APP_BACKEND_URL | Backend server URL | Yes |

## Usage

1. Create an account or log in
2. Complete your fitness profile:
   - Basic measurements (height, weight, age)
   - Fitness goals
   - Previous exercise experience
   - Available equipment
   - Time commitment
3. Select your preferred workout type (running/cycling/gym)
4. Generate your personalized workout plan
5. Track your progress and receive plan adjustments

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
