"use client";
import React, { useContext } from "react";
import { ToastContext } from "../../../../components/ToastProvider/ToastProvider";
import { useRouter } from "next/navigation";

function ContactPage() {
  const { createToast } = useContext(ToastContext);
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    createToast("Message sent!", "success");
    event.target.reset();

    router.push("/exercises/02-flash-messages");
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input id="name" required={true} />

        <label htmlFor="message">Message:</label>
        <textarea id="message" />

        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

export default ContactPage;
