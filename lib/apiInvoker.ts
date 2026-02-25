import { Method } from "axios";
import { api } from "@lib/axios";

export async function apiInvoker<T>(
  method: Method,
  url: string,
  data?: unknown,
  params?: Record<string, unknown>
): Promise<T> {
  const response = await api({
    method,
    url,
    data,
    params
  });

  return response.data;
}
