"use client";

import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export const Categoryname = () => {
  const [count, setCount] = useState<number>(0);
  return <Badge variant="outline">All Dishes</Badge>;
};
