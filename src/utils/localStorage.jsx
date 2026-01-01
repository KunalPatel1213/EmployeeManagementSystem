const employees = [
  {
    id: 1,
    firstname: "Aarav",
    email: "e@e.com",
    password: "123",
    tasks: [
      {
        taskNumber: 1,
        active: 1,
        newTask: 2,
        completed: 0,
        failed: 0,
        title: "Fix navbar responsiveness",
        description: "Adjust flexbox layout for mobile view.",
        date: "2025-01-10",
        category: "Development"
      },
      {
        taskNumber: 2,
        active: 0,
        newTask: 0,
        completed: 1,
        failed: 0,
        title: "Update portfolio icons",
        description: "Integrate FontAwesome icons in project showcase.",
        date: "2025-01-05",
        category: "Design"
      },
      {
        taskNumber: 3,
        active: 0,
        newTask: 0,
        completed: 0,
        failed: 2,
        title: "Deploy Django app",
        description: "Push latest changes to production server.",
        date: "2025-01-08",
        category: "Deployment"
      }
    ]
  },
  {
    id: 2,
    firstname: "Priya",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        taskNumber: 1,
        active: 2,
        newTask: 1,
        completed: 0,
        failed: 0,
        title: "Write unit tests",
        description: "Add coverage for cart context processor.",
        date: "2025-01-12",
        category: "Testing"
      },
      {
        taskNumber: 2,
        active: 0,
        newTask: 0,
        completed: 2,
        failed: 0,
        title: "Fix CSRF error",
        description: "Resolve CSRF token mismatch in Django forms.",
        date: "2025-01-07",
        category: "Bug Fix"
      },
      {
        taskNumber: 3,
        active: 0,
        newTask: 0,
        completed: 0,
        failed: 1,
        title: "React Router setup",
        description: "Implement navigation between pages.",
        date: "2025-01-09",
        category: "Frontend"
      }
    ]
  },
  {
    id: 3,
    firstname: "Rohan",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        taskNumber: 1,
        active: 3,
        newTask: 2,
        completed: 0,
        failed: 0,
        title: "Add hover animations",
        description: "Create slide-in effect for portfolio icons.",
        date: "2025-01-11",
        category: "UI/UX"
      },
      {
        taskNumber: 2,
        active: 0,
        newTask: 0,
        completed: 1,
        failed: 0,
        title: "Setup VS Code Copilot",
        description: "Configure Copilot extension for faster coding.",
        date: "2025-01-06",
        category: "Tooling"
      },
      {
        taskNumber: 3,
        active: 0,
        newTask: 0,
        completed: 0,
        failed: 2,
        title: "Flexbox gap issue",
        description: "Fix spacing between elements in layout.",
        date: "2025-01-08",
        category: "Development"
      }
    ]
  },
  {
    id: 4,
    firstname: "Sneha",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        taskNumber: 1,
        active: 1,
        newTask: 3,
        completed: 0,
        failed: 0,
        title: "Prepare demo code",
        description: "Create reference sheet for student community.",
        date: "2025-01-13",
        category: "Documentation"
      },
      {
        taskNumber: 2,
        active: 0,
        newTask: 0,
        completed: 2,
        failed: 0,
        title: "TCP handshake analogy",
        description: "Write blog post explaining networking basics.",
        date: "2025-01-04",
        category: "Education"
      },
      {
        taskNumber: 3,
        active: 0,
        newTask: 0,
        completed: 0,
        failed: 1,
        title: "Virtual environment setup",
        description: "Fix pipenv installation errors.",
        date: "2025-01-09",
        category: "Tooling"
      }
    ]
  },
  {
    id: 5,
    firstname: "Kunal",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        taskNumber: 1,
        active: 2,
        newTask: 1,
        completed: 0,
        failed: 0,
        title: "Polish portfolio header",
        description: "Make h1 responsive with CSS transforms.",
        date: "2025-01-14",
        category: "Design"
      },
      {
        taskNumber: 2,
        active: 0,
        newTask: 0,
        completed: 3,
        failed: 0,
        title: "Add animation effects",
        description: "Fade-in text on scroll.",
        date: "2025-01-05",
        category: "UI/UX"
      },
      {
        taskNumber: 3,
        active: 0,
        newTask: 0,
        completed: 0,
        failed: 2,
        title: "Django deployment error",
        description: "Fix server crash on startup.",
        date: "2025-01-08",
        category: "Deployment"
      }
    ]
  }
];
const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];

 
export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

 
export const getLocalStorage = () => {
  const employees  = JSON.parse(localStorage.getItem("employees")) || [];
  const admin  = JSON.parse(localStorage.getItem("admin")) || [];
  

  return {employees ,admin }
};