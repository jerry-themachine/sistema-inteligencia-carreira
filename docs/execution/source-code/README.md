# Source Code Backup

## Objective

Store and version the JavaScript code used in the SIC n8n workflow nodes, ensuring traceability, rollback capability and technical governance.

---

## Repository Structure

```text
source-code/
├── README.md
├── infojobs/
│   ├── INFOJOBS_Extrair_IDs_v1.js
│   └── INFOJOBS_Normalizar_v1.js
├── score/
│   └── SIC_Score_v2.1.js
├── recrutei/
│   └── RECRUTEI_Normalizar_v1.js
├── gupy/
│   └── GUPY_Normalizar_v1.js
└── catho/
    └── CATHO_Normalizar_v1.js
```

---

## Governance

Each script must be stored after validation or homologation.

Each update must reference:

* Related Request
* Related Incident
* Related Deployment
* Sprint

---

## Status

Active
