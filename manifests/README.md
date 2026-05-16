# Kubernetes Manifests

This folder contains Kubernetes manifests for deploying the `pixel-art` app.

Files:

- `namespace.yaml` — creates the `pixel-art` namespace.
- `deployment.yaml` — deploys the app container in the namespace.
- `service.yaml` — exposes the app internally on port `80`.
- `ingress.yaml` — routes external traffic to the service using an Ingress resource.
- `kustomization.yaml` — groups all resources so they can be applied together with `kubectl apply -k manifests`.

Usage:

1. Build or push a container image named `pixel-art:latest`.
2. Ensure your Kubernetes cluster has an ingress controller installed.
3. Apply the manifests:

```bash
kubectl apply -k manifests
```

The `Ingress` is configured for host `pixel-art.local`; update it as needed for your environment.