import { VoltAgent, VoltAgentExporter } from "@voltagent/core";
import { orchestratorAgent } from "./agents/orchestrator.js";
new VoltAgent({
    agents: {
        orchestrator: orchestratorAgent,
    },
    telemetryExporter: new VoltAgentExporter({
        publicKey: "pk_30b49fdc4ce16104674aaedc6ddbba77",
        secretKey: "sk_live_132717c5164fbbecdbf8e6e7ce806eb6d996e7d421d511b3398d8e28af8a9aff",
        baseUrl: "https://api.voltagent.dev",
    }),
});
