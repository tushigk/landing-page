import qs from "qs";

export class HttpRequest {
    private baseUrl: string;
    private service: unknown;

    constructor(service: unknown, baseUrl: string) {
        this.service = service;
        this.baseUrl = baseUrl;
    }

    private async request<T>(
        endpoint: string,
        options: RequestInit
    ): Promise<T> {
        const url = `${this.baseUrl}${endpoint}`;

        const response = await fetch(url, options);

        if (!response.ok) {
            let errorMessage = `HTTP error! status: ${response.status}`;
            try {
                const errorData = await response.json();
                errorMessage = errorData?.message || errorData?.error || errorMessage;
            } catch {
                // Fallback to text if JSON parse fails
                const errorText = await response.text().catch(() => "");
                if (errorText) errorMessage = errorText;
            }
            throw new Error(errorMessage);
        }

        if (response.status === 204) {
            return {} as T;
        }

        const text = await response.text();
        if (!text) {
            return {} as T;
        }

        try {
            return JSON.parse(text) as T;
        } catch {
            return text as unknown as T;
        }
    }

    async get<T = unknown>(
        endpoint: string,
        params?: Record<string, unknown>
    ): Promise<T> {
        const queryString = params
            ? qs.stringify(params, { addQueryPrefix: true })
            : "";
        return this.request<T>(`${endpoint}${queryString}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

    async post<T = unknown>(
        endpoint: string,
        body?: Record<string, unknown> | FormData
    ): Promise<T> {
        const isFormData = body instanceof FormData;
        return this.request<T>(endpoint, {
            method: "POST",
            headers: isFormData ? {} : { "Content-Type": "application/json" },
            body: isFormData ? body : (body ? JSON.stringify(body) : undefined),
        });
    }

    async put<T = unknown>(
        endpoint: string,
        body?: Record<string, unknown> | FormData
    ): Promise<T> {
        const isFormData = body instanceof FormData;
        return this.request<T>(endpoint, {
            method: "PUT",
            headers: isFormData ? {} : { "Content-Type": "application/json" },
            body: isFormData ? body : (body ? JSON.stringify(body) : undefined),
        });
    }

    async upload<T = unknown>(
        endpoint: string,
        formData: FormData
    ): Promise<T> {
        return this.post<T>(endpoint, formData);
    }

    async del<T = unknown>(endpoint: string): Promise<T> {
        return this.delete(endpoint);
    }

    async delete<T = unknown>(endpoint: string): Promise<T> {
        return this.request<T>(endpoint, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}
