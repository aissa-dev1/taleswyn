"use client";

import { useState } from "react";

import styles from "./ContactForm.module.scss";

import { Form } from "@/components/Form";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

import { useToastStore } from "@/stores/toast";

import { sendMail } from "@/lib/actions/send-mail";

const FORM_STATE = {
  name: "",
  email: "",
  subject: "",
  message: "",
  pending: false,
};

function ContactForm() {
  const [form, setForm] = useState(FORM_STATE);
  const addToast = useToastStore((s) => s.addToast);

  function updateFormProp(e: React.FocusEvent<HTMLInputElement, Element>) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit() {
    if (form.email.length <= 0 || form.message.length <= 0) {
      addToast({
        title: "Missing Information",
        description:
          "Please fill out both your email and message before submitting.",
        variant: "error",
      });
      return;
    }

    try {
      setForm((prev) => ({ ...prev, pending: true }));
      await sendMail({
        name: form.name,
        email: form.email,
        sendTo: process.env.NEXT_PUBLIC_SEND_MAIL_EMAIL,
        subject: form.subject,
        text: form.message,
      });
      addToast({
        title: "Message Sent",
        description: "Thanks for reaching out! We'll get back to you shortly.",
      });
      setForm(FORM_STATE);
    } catch (error) {
      addToast({
        title: "Something Went Wrong",
        description: "We couldn't send your message. Please try again later.",
        variant: "error",
      });
    } finally {
      setForm((prev) => ({ ...prev, pending: false }));
    }
  }

  return (
    <Form spacing="md" onSubmit={handleSubmit}>
      <div className={styles.nameAndEmail}>
        <Input
          label="Your name (Optional)"
          name="name"
          value={form.name}
          onChange={updateFormProp}
        />
        <Input
          type="email"
          label="Email"
          required
          name="email"
          value={form.email}
          onChange={updateFormProp}
        />
      </div>
      <Input
        label="Subject (Optional)"
        name="subject"
        value={form.subject}
        onChange={updateFormProp}
      />
      <Input
        label="Message"
        required
        name="message"
        value={form.message}
        onChange={updateFormProp}
      />
      <Button size="responsive" type="submit" disabled={form.pending}>
        {form.pending ? "Loading..." : "Send Message"}
      </Button>
    </Form>
  );
}

export { ContactForm };
