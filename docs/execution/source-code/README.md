# Source Code Backup

## Objective

Store and version the JavaScript code used in the SIC n8n workflow nodes, ensuring traceability, rollback capability and technical governance.

---

## Repository Structure

```text
source-code/

├── infojobs/
│   ├── INFOJOBS_Extrair_IDs_v1.js
│   └── INFOJOBS_Normalizar_v1.js

├── score/
│   └── SIC_Score_v2.1.js

├── recrutei/
│   └── RECRUTEI_Normalizar_v1.js

├── gupy/
│   └── GUPY_Normalizar_v1.js

├── catho/
│   └── CATHO_Normalizar_v1.js

├── arbeitnow/
│   └── N/A
│       Source integrated directly with SIC Score v2.1
│       No normalization component required

└── workflows/
    ├── Radar_De_Vagas_Coleta_Mult_Fonte_v1.json
    └── Radar_De_Vagas_Coleta_Mult_Fonte_Export_v1.json
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

## Architectural Notes

### ARBEITNOW

The ARBEITNOW source does not use a dedicated normalization component.

Current flow:

ARBEITNOW - Coleta API
→ ARBEITNOW - Split Registros
→ SIC Score v2.1

Reason:
The source already provides data in a structure compatible with the SIC scoring engine.

Status:
Not Applicable (N/A)

---

## Status

Status: Active

Coverage:
✓ SIC Score v2.1
✓ InfoJobs
✓ Catho
✓ Recrutei
✓ Gupy
✓ Workflow Export

Exception:
ARBEITNOW normalization component not required.
