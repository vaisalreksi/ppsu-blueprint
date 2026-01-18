# 🔍 Blueprint Modul: Sistem Continuous Audit & Continuous Monitoring (CACM)
## PT Pembangunan Prasarana Sumatera Utara (Perseroda)

---

## 1. Latar Belakang

### Deskripsi
Continuous Audit & Continuous Monitoring (CACM) adalah pendekatan audit modern yang menggunakan teknologi untuk melakukan audit dan monitoring secara terus-menerus (real-time atau near real-time), bukan hanya secara periodik. Sistem ini memungkinkan deteksi dini terhadap anomali, fraud, dan non-compliance.

### Perbedaan CA vs CM

| Aspek | Continuous Audit (CA) | Continuous Monitoring (CM) |
|-------|----------------------|---------------------------|
| Pelaku | Internal Audit | Manajemen |
| Fokus | Assurance, compliance | Operational efficiency |
| Frekuensi | Real-time / periodik singkat | Real-time |
| Output | Audit findings | Operational alerts |

### Kondisi Saat Ini (As-Is)

| Aspek | Kondisi | Risiko/Masalah |
|-------|---------|----------------|
| Audit | Manual, periodik (tahunan) | Deteksi terlambat |
| Sampling | Manual, terbatas | Coverage rendah |
| Monitoring | Tidak ada sistem | Tidak real-time |
| Analysis | Excel, manual | Time-consuming |
| Reporting | Laporan manual | Subjektif |
| Follow-up | Excel tracking | Tidak termonitor |

### Kebutuhan & Manfaat
- ⚡ Deteksi anomali real-time
- 📊 100% population testing (bukan sampling)
- 🔔 Early warning untuk management
- 📈 Trend analysis dan pattern detection
- ⏱️ Mengurangi waktu audit

---

## 2. Tujuan Modul

> **Membangun sistem CACM terintegrasi dengan automated audit rules, exception detection, dashboard monitoring, dan workflow penindaklanjutan temuan yang terintegrasi dengan semua modul operasional.**

### Sasaran Utama
1. ✅ Continuous monitoring dengan automated rules
2. ✅ Exception detection dan alert
3. ✅ Audit finding management
4. ✅ Follow-up tracking dan remediation
5. ✅ Dashboard analytics dan trend
6. ✅ Integration dengan semua modul

---

## 3. Stakeholder

| Stakeholder | Peran | Kebutuhan Utama |
|-------------|-------|-----------------|
| Dewan Komisaris | Oversight | Audit summary report |
| Direksi | Decision making | Exception alert, dashboard |
| Internal Audit | Audit execution | Rules, findings, reports |
| Manajer Unit | Auditee | Remediation, tracking |
| IT | System support | Integration, data access |
| Risk Officer | Koordinasi | Risk-based audit |

---

## 4. Kebutuhan Fungsional

### 4.1 Audit Universe & Planning

```
FR-CA-001: Sistem dapat mencatat audit universe (area auditabel)
FR-CA-002: Sistem dapat link audit area ke modul operasional
FR-CA-003: Sistem dapat setup risk scoring per audit area
FR-CA-004: Sistem dapat generate risk-based audit plan
FR-CA-005: Sistem dapat tracking audit schedule
```

### 4.2 Automated Audit Rules

> [!IMPORTANT]
> Rules dijalankan secara otomatis terhadap data dari semua modul

```
FR-CA-010: Sistem dapat setup audit rules dengan kondisi
FR-CA-011: Sistem dapat schedule rule execution (real-time/daily/weekly)
FR-CA-012: Sistem dapat execute rules terhadap data modul
FR-CA-013: Sistem menyimpan histori rule execution
FR-CA-014: Sistem dapat enable/disable rules
FR-CA-015: Sistem dapat set severity per rule (low/medium/high/critical)
```

**Contoh Audit Rules:**

| Rule ID | Nama Rule | Kondisi | Severity | Modul |
|---------|-----------|---------|----------|-------|
| R-FIN-001 | Large Transaction | Amount > Rp 1 M tanpa approval L2 | High | Keuangan |
| R-FIN-002 | Duplicate Payment | Same vendor + amount + date | Critical | Keuangan |
| R-FIN-003 | Weekend Transaction | Transaksi di hari libur | Medium | Keuangan |
| R-HR-001 | Ghost Employee | Karyawan tanpa presensi 30 hari | High | HC |
| R-HR-002 | Excessive Overtime | Lembur > 50 jam/bulan | Medium | HC |
| R-PRJ-001 | Progress Lag | Actual < Plan > 15% | High | Teknik |
| R-PRJ-002 | Cost Overrun | Actual cost > Budget 10% | Critical | Teknik |
| R-OPS-001 | Overcapacity | Kapasitas ferry > 100% | Critical | Transportasi |

### 4.3 Exception Detection & Alert

```
FR-CA-020: Sistem mendeteksi exception dari rule execution
FR-CA-021: Sistem mengkategorikan exception (anomaly/violation/fraud indicator)
FR-CA-022: Sistem mengirim alert untuk exception high/critical
FR-CA-023: Dashboard menampilkan exception summary
FR-CA-024: Sistem dapat drill-down ke detail transaksi
FR-CA-025: Sistem dapat mark exception (investigate/false positive/confirmed)
```

**Exception Status Flow:**
```
Detected → Under Review → Confirmed Finding / False Positive
                ↓
           Investigating
                ↓
           Finding Created
```

### 4.4 Finding Management

```
FR-CA-030: Sistem dapat mencatat audit finding dari exception
FR-CA-031: Sistem dapat assign finding ke auditee (PIC)
FR-CA-032: Sistem dapat set deadline remediation
FR-CA-033: Sistem dapat tracking status finding (open/in progress/closed)
FR-CA-034: Auditee dapat input remediation action
FR-CA-035: Auditor dapat verify remediation
FR-CA-036: Sistem dapat escalate overdue findings
```

**Finding Status:**
- 🔴 **Open** - Newly created, pending action
- 🟡 **In Progress** - Remediation ongoing
- 🔵 **Pending Verification** - Remediation done, awaiting audit verify
- 🟢 **Closed** - Verified and closed
- ⚫ **Overdue** - Past deadline, not resolved

### 4.5 Analytics & Dashboard

```
FR-CA-040: Dashboard menampilkan exception trend per periode
FR-CA-041: Dashboard menampilkan top exceptions by frequency
FR-CA-042: Dashboard menampilkan finding aging
FR-CA-043: Dashboard menampilkan rule effectiveness
FR-CA-044: Dashboard menampilkan audit coverage
FR-CA-045: Sistem dapat generate analytics report
```

### 4.6 Reporting

```
FR-CA-050: Sistem dapat generate exception report
FR-CA-051: Sistem dapat generate finding status report
FR-CA-052: Sistem dapat generate audit coverage report
FR-CA-053: Sistem dapat generate management summary report
FR-CA-054: Sistem dapat export report (PDF, Excel)
```

---

## 5. Integrasi dengan Semua Modul

> [!IMPORTANT]
> CACM membaca data dari semua modul untuk audit otomatis

### 5.1 Data Source per Modul

| Modul | Data yang Diaudit | Contoh Rule |
|-------|-------------------|-------------|
| Keuangan | Jurnal, Pembayaran, AR | Duplicate payment, large transaction |
| Human Capital | Payroll, Presensi, Lembur | Ghost employee, excessive overtime |
| Bagian Umum | PO, Aset, Kendaraan | Split PO, asset missing |
| Kesekretariatan | Surat, Kontrak | Expired contract, unsigned |
| Transportasi | Tiket, Kapasitas | Overcapacity, revenue anomaly |
| PRSU | Booking, Payment | Double booking, unpaid invoice |
| Teknik | Progress, Billing | Cost overrun, progress lag |
| Manajemen Risiko | Risk Register | High risk unmitigated |

### 5.2 API Integration Points

```
GET /api/keuangan/jurnal           → Audit journal entries
GET /api/keuangan/pembayaran       → Audit payments
GET /api/hr/payroll               → Audit payroll
GET /api/hr/presensi              → Audit attendance
GET /api/bagian-umum/po           → Audit purchase orders
GET /api/teknik/progress          → Audit project progress
GET /api/transportasi/tiket       → Audit ticket sales
GET /api/prsu/booking             → Audit bookings
```

---

## 6. Kebutuhan Non-Fungsional

| Kode | Aspek | Requirement |
|------|-------|-------------|
| NFR-01 | Processing | Rule execution < 5 menit |
| NFR-02 | Real-time | Alert delivery < 1 menit |
| NFR-03 | Data Volume | Handle 1 juta transaksi/bulan |
| NFR-04 | Security | Role-based, audit trail |
| NFR-05 | Availability | 99.9% uptime |
| NFR-06 | Compliance | IIA Standards compliant |

---

## 7. Diagram Proses Bisnis

### 7.1 CACM Cycle

```
┌─────────────────────────────────────────────────────────────────┐
│                    CACM WORKFLOW                                │
│                                                                 │
│    ┌──────────┐     ┌──────────┐     ┌──────────┐              │
│    │  DEFINE  │────▶│  EXECUTE │────▶│  DETECT  │              │
│    │  Rules   │     │  Rules   │     │ Exception│              │
│    └──────────┘     └──────────┘     └──────────┘              │
│                                            │                    │
│         ┌──────────────────────────────────┘                    │
│         ▼                                                       │
│    ┌──────────┐     ┌──────────┐     ┌──────────┐              │
│    │  ALERT   │────▶│ INVESTIGATE│──▶│ FINDING  │              │
│    │  Notify  │     │  Review   │    │  Create  │              │
│    └──────────┘     └──────────┘     └──────────┘              │
│                                            │                    │
│         ┌──────────────────────────────────┘                    │
│         ▼                                                       │
│    ┌──────────┐     ┌──────────┐     ┌──────────┐              │
│    │REMEDIATE │────▶│  VERIFY  │────▶│  CLOSE   │              │
│    │  Action  │     │  Audit   │     │  Report  │              │
│    └──────────┘     └──────────┘     └──────────┘              │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 7.2 Rule Execution Flow

```
Data Source ──▶ Rule Engine ──▶ Exception? ──▶ Yes ──▶ Alert
(All Modules)       │                           │
                    │                           ▼
                    ▼                      Investigation
              No Exception                      │
                    │                           ▼
                    ▼                      Finding
                Log Result                      │
                                               ▼
                                          Remediation
```

---

## 8. Entity Relationship Diagram (ERD)

### Entitas Utama

| Entity | Atribut Utama |
|--------|---------------|
| **AuditUniverse** | id, name, module, risk_score, last_audit_date |
| **AuditRule** | id, name, condition, severity, module, schedule, status |
| **RuleExecution** | id, rule_id, execution_time, records_checked, exceptions_found |
| **Exception** | id, rule_id, execution_id, transaction_ref, status, severity |
| **Finding** | id, exception_id, title, description, pic_id, deadline, status |
| **Remediation** | id, finding_id, action, evidence_url, submitted_date |
| **AuditAlert** | id, exception_id, recipient_id, channel, sent_at, read_at |
| **AuditLog** | id, user_id, action, entity_type, entity_id, timestamp |

---

## 9. Role & Permission Matrix

| Fitur | Auditor | Audit Lead | Auditee | Manajer | Direksi |
|-------|:-------:|:----------:|:-------:|:-------:|:-------:|
| Setup Rules | ✅ | ✅ | ❌ | ❌ | ❌ |
| Execute Rules | ✅ | ✅ | ❌ | ❌ | ❌ |
| View Exceptions | ✅ | ✅ | ✅* | ✅ | ✅ |
| Investigate | ✅ | ✅ | ❌ | ❌ | ❌ |
| Create Finding | ✅ | ✅ | ❌ | ❌ | ❌ |
| Input Remediation | ❌ | ❌ | ✅ | ✅ | ❌ |
| Verify Remediation | ✅ | ✅ | ❌ | ❌ | ❌ |
| Dashboard Full | ✅ | ✅ | ❌ | ❌ | ✅ |
| Generate Report | ✅ | ✅ | ❌ | ✅ | ✅ |

*Auditee hanya lihat exception terkait unit mereka

---

## 10. Laporan yang Dibutuhkan

### Laporan Operasional
1. Exception Summary Report (Daily/Weekly)
2. Rule Execution Log
3. Finding Status Report
4. Remediation Progress Report

### Laporan Manajemen
1. Audit Coverage Report
2. Exception Trend Analysis
3. Top 10 Recurring Exceptions
4. Finding Aging Report

### Laporan Eksekutif
1. CACM Executive Summary (untuk Direksi)
2. Audit Committee Report (untuk Komisaris)
3. Compliance Dashboard

---

## 11. Timeline Implementasi

| Fase | Aktivitas | Durasi |
|------|-----------|--------|
| **Fase 1** | Audit Universe & Framework | 2 minggu |
| **Fase 2** | Rule Engine Development | 4 minggu |
| **Fase 3** | Integration dengan Modul (API) | 4 minggu |
| **Fase 4** | Exception Detection & Alert | 3 minggu |
| **Fase 5** | Finding Management | 2 minggu |
| **Fase 6** | Dashboard & Analytics | 3 minggu |
| **Fase 7** | Reporting | 2 minggu |
| **Fase 8** | UAT & Go-live | 2 minggu |
| | **Total** | **22 minggu** |

---

## 12. Risiko & Mitigasi

| Risiko | Dampak | Mitigasi |
|--------|--------|----------|
| False positives tinggi | Tinggi | Rule tuning, threshold adjustment |
| Data integration failure | Tinggi | API testing, fallback |
| Alert fatigue | Sedang | Priority filtering |
| Resistance from units | Sedang | Change management, training |

---

## 13. Kriteria Sukses (KPI)

| KPI | Target | Cara Ukur |
|-----|--------|-----------|
| Rule coverage | 100% modul | Rule inventory |
| False positive rate | < 10% | Exception review |
| Finding closure on-time | > 85% | Deadline tracking |
| Detection to resolution | < 30 hari | Finding aging |
| Audit efficiency | 40% improvement | Time comparison |

---

## 14. Kesimpulan

Sistem CACM akan:

> [!IMPORTANT]
> - **Mengotomatisasi** audit dengan rule-based engine
> - **Mendeteksi** anomali dan exception real-time
> - **Mengintegrasikan** data dari semua modul
> - **Mempercepat** follow-up dengan workflow digital
> - **Memvisualisasikan** trend dan analytics

Fitur unggulan:
- ⚙️ **Rule Engine** - Automated audit rules
- 🔔 **Exception Alert** - Real-time notification
- 📊 **Analytics** - Trend dan pattern detection
- 📋 **Finding Workflow** - Digital remediation tracking
- 🔗 **Full Integration** - Data dari semua modul

---

*Dokumen ini disusun sebagai bagian dari analisis sistem PT PPSU Perseroda*
*Versi: 1.0 | Tanggal: 18 Januari 2026*
