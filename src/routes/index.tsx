import { createFileRoute } from "@tanstack/react-router";
import { VinCavePage } from "@/components/vincave-page";

export const Route = createFileRoute("/")({ component: VinCavePage });
