export const healthData = {
  anatomyImage: "/anatomy.png",
  indicators: [
    {
      id: "heart",
      name: "Healthy Heart",
      position: { top: "30%", left: "50%" },
      status: "healthy",
      color: "bg-green-500",
    },
    {
      id: "leg",
      name: "Healthy Leg",
      position: { top: "70%", left: "40%" },
      status: "healthy",
      color: "bg-cyan-500",
    },
  ],
  healthStatus: [
    {
      id: "lungs",
      name: "Lungs",
      date: "26 Oct 2021",
      status: "danger",
    },
    {
      id: "teeth",
      name: "Teeth",
      date: "26 Oct 2021",
      status: "healthy",
    },
    {
      id: "bone",
      name: "Bone",
      date: "26 Oct 2021",
      status: "danger",
    },
  ],
}
