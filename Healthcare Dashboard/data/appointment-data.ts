export const appointmentData = {
  upcomingAppointments: [
    {
      day: "Thursday",
      items: [
        {
          id: "checkup",
          title: "Health checkup complete",
          time: "11:00 AM",
          icon: "activity",
        },
        {
          id: "eye",
          title: "Ophthalmologist",
          time: "14:00 PM",
          icon: "eye",
        },
      ],
    },
    {
      day: "Saturday",
      items: [
        {
          id: "cardio",
          title: "Cardiologist",
          time: "12:00 AM",
          icon: "heart",
        },
        {
          id: "neuro",
          title: "Neurologist",
          time: "16:00 PM",
          icon: "brain",
        },
      ],
    },
  ],
  activityData: {
    totalAppointments: 3,
    weeklyData: [
      {
        day: "Mon",
        appointments: [2, 1, 0, 0],
      },
      {
        day: "Tues",
        appointments: [1, 2, 0, 1],
      },
      {
        day: "Wed",
        appointments: [0, 1, 2, 0],
      },
      {
        day: "Thurs",
        appointments: [1, 0, 1, 2],
      },
      {
        day: "Fri",
        appointments: [0, 2, 1, 0],
      },
      {
        day: "Sat",
        appointments: [1, 0, 2, 1],
      },
      {
        day: "Sun",
        appointments: [0, 1, 0, 0],
      },
    ],
  },
}
