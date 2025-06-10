"use client";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

// export const metadata = {
//   title: "Contact Us – Montrose Hotel",
//   description: "Get in touch with Montrose Hotel for inquiries and support.",
// };

export default function ContactPage() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    console.log("Contact form:", data);
    alert("Thank you—we’ll be in touch soon!");
  };

  return (
    <motion.div
      className="container mx-auto py-16 px-4 grid grid-cols-1 lg:grid-cols-2 gap-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="text-gray-600">
          Have questions or need assistance? Fill out the form and our team will get back to you
          within 24 hours.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <Input {...register("name", { required: true })} />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <Input type="email" {...register("email", { required: true })} />
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <Textarea {...register("message", { required: true })} rows={4} />
          </div>
          <Button type="submit" className="bg-montrose-wine text-white">
            Send Message
          </Button>
        </form>
      </div>
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Our Location</h2>
        <iframe
          className="w-full h-64 rounded-lg border-0"
          src="https://www.google.com/maps/embed?...Lekki+Lagos"
          allowFullScreen
        ></iframe>
        <div className="space-y-2 text-gray-700">
          <p>
            <strong>Address:</strong> Plot 5, Aliu Animashaun Street, Off Disu Akanbi Off Providence Road, Lekki phase 1, Lagos, Nigeria
          </p>
          <p>
            <strong>Phone:</strong> +234 803 203 3694
          </p>
          <p>
            <strong>Email:</strong> info@montroselekki.com
          </p>
        </div>
      </div>
    </motion.div>
  );
}
