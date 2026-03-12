export async function fetchOverview() {
  return { totalUsers: 5, totalProducts: 8, revenue: "₹50,000" };
}

export async function fetchUsers() {
  return [
    { id: 1, name: "Krish Patel", email: "krish@gmail.com" },
    { id: 2, name: "Taksh Sharma", email: "taksh@gmail.com" },
    { id: 3, name: "Dhruv Shah", email: "dhruv@gmail.com" },
    { id: 4, name: "Priya Angle", email: "priya@gmail.com" },
    { id: 5, name: "Yash Methata", email: "yash@gmail.com" },
  ];
}

export async function fetchProducts() {
  return [
    { id: 1, name: "Laptop", price: "₹50,000" },
    { id: 2, name: "Phone", price: "₹25,000" },
    { id: 3, name: "Headphones", price: "₹2,500" },
    { id: 4, name: "Keyboard", price: "₹1,500" },
    { id: 5, name: "Mouse", price: "₹1,000" },
    { id: 6, name: "Monitor", price: "₹15,000" },
    { id: 7, name: "Tablet", price: "₹20,000" },
    { id: 8, name: "Smartwatch", price: "₹5,000" },
  ];
}  