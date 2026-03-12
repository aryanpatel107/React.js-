import { useForm } from "react-hook-form";

export default function UserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("User Added Successfully");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "8px",
        maxWidth: "400px",
      }}
    >
      <h3>Add User</h3>

      <div style={{ marginTop: "15px" }}>
        <input
          placeholder="Name"
          {...register("name", { required: "Name is required" })}
          style={{ width: "100%", padding: "8px" }}
        />
        {errors.name && (
          <p style={{ color: "red" }}>{errors.name.message}</p>
        )}
      </div>

      <div style={{ marginTop: "15px" }}>
        <input
          placeholder="Email"
          {...register("email", { required: "Email is required" })}
          style={{ width: "100%", padding: "8px" }}
        />
        {errors.email && (
          <p style={{ color: "red" }}>{errors.email.message}</p>
        )}
      </div>

      <button
        type="submit"
        style={{
          marginTop: "20px",
          padding: "10px",
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Submit
      </button>
    </form>
  );
}