"use client";

import { PaymentWidget } from "@/components";
import { motion } from "framer-motion";
import { Badge, Card, CardContent, CardHeader, CardTitle } from "@/components/ui";

export default function PaymentPage() {
  return (
    <div className="max-w-md mx-auto mt-16 p-6 bg-white rounded-lg shadow">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md"
      >
        <Card className="shadow-lg border border-gray-200">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Payment Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-center">
            <div>
              <p className="text-gray-600">Account Name</p>
              <p className="font-medium">Montrose Hotel Ltd</p>
            </div>

            <div>
              <p className="text-gray-600">Bank Name</p>
              <p className="font-medium">Zenith Bank</p>
            </div>

            <div>
              <p className="text-gray-600">Account Number</p>
              <Badge variant="outline" className="text-lg py-2 px-4">
                1015250846
              </Badge>
            </div>

            <p className="text-sm text-gray-500 pt-4">
              Please make payment using the above account and keep your receipt or transaction
              reference for confirmation.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
