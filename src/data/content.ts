export const siteConfig = {
  name: "Akash Deshapathi",
  initials: "AD",
  tagline: "Robotics · AI Systems · Control Engineering",
  description:
    "Building intelligent machines at the intersection of robotics, AI, and control systems — from autonomous navigation to deep learning pipelines.",
  email: "your@email.com",
  github: "https://github.com/dark-syndrome",
  linkedin: "#",
  twitter: "#",
}

export type Project = {
  slug: string
  title: string
  subtitle: string
  description: string
  tags: string[]
  category: "Robotics" | "AI/ML" | "Control Systems"
  year: string
  cover: string
  featured: boolean
}

export const projects: Project[] = [
  {
    slug: "gpu-accelerated-robot-manipulation",
    title: "GPU-Accelerated Robotic Manipulation",
    subtitle: "AI-powered pick-and-place with ROS2 + MoveIt2",
    description:
      "Designed and implemented a GPU-accelerated manipulation pipeline using ROS2, MoveIt2, and Gazebo. Integrated computer vision for object detection and motion planning.",
    tags: ["ROS2", "MoveIt2", "CUDA", "PyTorch", "Gazebo", "Docker"],
    category: "Robotics",
    year: "2025",
    cover: "/projects/robot-manipulation/cover.jpg",
    featured: true,
  },
  {
    slug: "ekf-control-simulation",
    title: "EKF State Estimation & Control",
    subtitle: "Extended Kalman Filter for nonlinear systems",
    description:
      "Developed an Extended Kalman Filter implementation for real-time state estimation in nonlinear dynamical systems, with applications to UAV navigation.",
    tags: ["Python", "MATLAB", "EKF", "Control Theory", "Simulation"],
    category: "Control Systems",
    year: "2025",
    cover: "/projects/ekf-control/cover.jpg",
    featured: true,
  },
  {
    slug: "ann-moisture-prediction",
    title: "ANN Moisture Ratio Prediction",
    subtitle: "Deep learning for industrial process control",
    description:
      "Neural network model trained to predict moisture ratio in drying processes, enabling predictive control for industrial applications.",
    tags: ["Python", "PyTorch", "ANN", "Data Science", "Industrial"],
    category: "AI/ML",
    year: "2024",
    cover: "/projects/ann-moisture/cover.jpg",
    featured: true,
  },
  {
    slug: "a3c-reinforcement-learning",
    title: "A3C Reinforcement Learning",
    subtitle: "Asynchronous Advantage Actor-Critic in Python",
    description:
      "Implementation of the A3C algorithm for training autonomous agents in complex environments using asynchronous parallel workers.",
    tags: ["Python", "RL", "A3C", "PyTorch", "OpenAI Gym"],
    category: "AI/ML",
    year: "2024",
    cover: "/projects/a3c/cover.jpg",
    featured: false,
  },
  {
    slug: "autonomous-navigation-bot",
    title: "Autonomous Navigation Bot",
    subtitle: "Self-navigating robot with ROS2 + Nav2",
    description:
      "Built a custom differential drive robot with full autonomous navigation stack including mapping, localization, and path planning using Nav2.",
    tags: ["ROS2", "Nav2", "SLAM", "Raspberry Pi", "LiDAR"],
    category: "Robotics",
    year: "2025",
    cover: "/projects/my-bot/cover.jpg",
    featured: false,
  },
]

export const services = [
  {
    icon: "⬡",
    title: "Robotics Engineering",
    description:
      "Full-stack robotics development — from hardware integration and sensor fusion to autonomous navigation and manipulation.",
    items: [
      "ROS2 system architecture",
      "SLAM & navigation stacks",
      "Manipulation & motion planning",
      "Simulation in Gazebo / Isaac Sim",
    ],
  },
  {
    icon: "◈",
    title: "AI / ML Development",
    description:
      "End-to-end machine learning pipelines for perception, prediction, and decision-making in real-world systems.",
    items: [
      "Computer vision pipelines",
      "Reinforcement learning agents",
      "Custom model training & deployment",
      "GPU-accelerated inference",
    ],
  },
  {
    icon: "⌬",
    title: "Control Systems",
    description:
      "Classical and modern control design for autonomous systems, UAVs, and industrial processes.",
    items: [
      "PID, LQR, MPC design",
      "State estimation (EKF / UKF)",
      "MATLAB / Simulink modeling",
      "Real-time embedded control",
    ],
  },
]

export const skills = [
  { name: "ROS2 / ROS", level: 90, category: "Robotics" },
  { name: "SLAM & Navigation", level: 85, category: "Robotics" },
  { name: "Python", level: 95, category: "Programming" },
  { name: "C++", level: 78, category: "Programming" },
  { name: "PyTorch / TensorFlow", level: 85, category: "AI/ML" },
  { name: "Reinforcement Learning", level: 80, category: "AI/ML" },
  { name: "MATLAB / Simulink", level: 88, category: "Control" },
  { name: "Control Theory (PID/MPC/LQR)", level: 83, category: "Control" },
  { name: "Gazebo / Isaac Sim", level: 80, category: "Simulation" },
  { name: "Docker / Linux", level: 82, category: "DevOps" },
]

export const timeline = [
  {
    year: "2025",
    title: "Robotics & AI Engineer",
    org: "Independent / Freelance",
    description:
      "Working on advanced robotics projects combining ROS2, deep learning, and control theory.",
  },
  {
    year: "2024",
    title: "AI/ML Research",
    org: "Personal Projects",
    description:
      "Developed reinforcement learning agents and neural network models for prediction and control tasks.",
  },
  {
    year: "2023",
    title: "Robotics Engineering",
    org: "Academic & Self-Study",
    description:
      "Deep dive into ROS2 ecosystem, autonomous navigation, and robotic simulation environments.",
  },
]

export const process = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We align on goals, constraints, and success criteria. I learn your system architecture and requirements.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "I propose a technical architecture — algorithms, toolchain, simulation plan, and milestones.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Iterative development with regular demos. You stay in the loop at every stage.",
  },
  {
    step: "04",
    title: "Deliver",
    description:
      "Clean code, documentation, and handoff. I'm available for post-delivery questions.",
  },
]
