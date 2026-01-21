# 📊 Analisis Kompleksitas & Effort Pengerjaan Modul
## PT Pembangunan Prasarana Sumatera Utara (Perseroda)

---

## 1. Tabel Skala Kerumitan per Modul

| Modul | Nama | Level | Effort | Tantangan & Masalah |
|:-----:|------|:-----:|:------:|---------------------|
| **0** | Dashboard Top Management | **6/10** | Medium | Integrasi API 9 modul, real-time aggregation, performa < 3 detik |
| **2** | Sistem Kesekretariatan | **5/10** | Medium | Workflow disposisi berjenjang, OCR arsip, notifikasi engine |
| **3** | Sistem Keuangan | **9/10** | High | PSAK compliance, audit trail ketat, rekonsiliasi bank, penyusutan |
| **4** | Sistem Bagian Umum | **6/10** | Medium | QR scanner aset, approval multi-level, stock opname |
| **5** | Human Capital | **8/10** | High | Payroll kompleks, PPh 21 (TER), BPJS, data privacy |
| **6** | Operasional Transportasi | **8/10** | High | GPS real-time, e-ticketing concurrency, payment gateway, offline POS |
| **7** | Operasional PRSU | **7/10** | Medium-High | Booking conflict, dynamic pricing, multi-venue |
| **8** | Teknik & Perencanaan | **7/10** | Medium-High | Kurva-S, RAB/RAP logic, progress tracking |
| **9** | Manajemen Risiko | **5/10** | Medium | Heat map 5x5, KRI monitoring, risk scoring |
| **10** | CACM (Internal Audit) | **7/10** | Medium-High | Rule engine anomali, query optimization, sampling |

---

## 2. Detail Tantangan per Modul

### 🔴 Level 9 - Sistem Keuangan (Modul 3)
- Kompleksitas aturan akuntansi sesuai PSAK
- Multi-currency dan precision handling
- Audit trail setiap perubahan (who, when, what)
- Integrasi bank untuk rekonsiliasi otomatis
- Perhitungan penyusutan & amortisasi

### 🔴 Level 8 - Human Capital (Modul 5)
- Payroll dengan variabel kompleks (lembur, shift, tunjangan)
- Regulasi PPh 21 yang berubah (TER 2024)
- Integrasi BPJS Kesehatan & Ketenagakerjaan
- Workflow cuti multi-level
- Enkripsi data pribadi karyawan

### 🔴 Level 8 - Operasional Transportasi (Modul 6)
- Real-time GPS tracking via websocket
- E-ticketing dengan high concurrency (peak hours)
- Integrasi payment gateway (QRIS, e-wallet, VA)
- Manifest sesuai regulasi Kemenhub
- Offline-first untuk POS di pelabuhan

### 🟠 Level 7 - Operasional PRSU (Modul 7)
- Booking calendar dengan conflict detection
- Dynamic pricing berdasarkan demand
- Multi-venue & multi-zone booking
- Approval workflow berdasarkan nilai
- Tenant billing & utility calculation

### 🟠 Level 7 - Teknik & Perencanaan (Modul 8)
- Kurva-S calculation & visualization
- RAB vs RAP comparison logic
- Progress tracking dengan dokumentasi foto
- Integrasi Keuangan untuk termin
- Log konstruksi harian

### 🟠 Level 7 - CACM (Modul 10)
- Rule engine untuk deteksi anomali
- Query optimization untuk data besar
- False positive management
- Finding tracking workflow
- Sampling algorithm representatif

### 🟡 Level 6 - Dashboard (Modul 0)
- Agregasi data dari 9 modul
- Caching strategy untuk real-time
- UI informatif tapi tidak overwhelming
- Drill-down capability

### 🟡 Level 6 - Bagian Umum (Modul 4)
- Integrasi barcode/QR scanner
- Workflow approval pengadaan
- Stock opname & reorder point
- Vendor scoring algorithm

### 🟢 Level 5 - Kesekretariatan (Modul 2)
- Workflow disposisi fleksibel
- OCR untuk arsip (akurasi bahasa Indonesia)
- Notifikasi & reminder engine
- Integrasi kalender booking

### 🟢 Level 5 - Manajemen Risiko (Modul 9)
- Heat map visualization
- KRI threshold monitoring
- Risk scoring (Likelihood × Impact)
- Integrasi KRI otomatis

---

## 3. Rekomendasi Prioritas Pengerjaan

| Fase | Modul | Durasi | Catatan |
|:----:|-------|:------:|---------|
| **1** | Modul 3 (Keuangan) | 8-10 minggu | Fondasi, harus selesai pertama |
| **2** | Modul 5 (HC) | 6-8 minggu | Parallel dengan Keuangan |
| **3** | Modul 6 (Transport) | 6-8 minggu | Revenue generator utama |
| **4** | Modul 7 (PRSU) | 5-6 minggu | Setelah payment gateway siap |
| **5** | Modul 8 (Teknik) | 5-6 minggu | Integrasi dengan Keuangan |
| **6** | Modul 4 (Bagum) | 4-5 minggu | Parallel dengan Teknik |
| **7** | Modul 2 (Sekretariat) | 4-5 minggu | Standalone, bisa kapan saja |
| **8** | Modul 9 (Risiko) | 3-4 minggu | Butuh data dari modul lain |
| **9** | Modul 10 (CACM) | 4-5 minggu | Butuh data transaksi |
| **10** | Modul 0 (Dashboard) | 4-5 minggu | **Terakhir**, butuh semua API |

---

## 4. Estimasi Total

| Metrik | Nilai |
|--------|-------|
| Total Durasi | **14-16 bulan** |
| Tim Minimum | 4 Backend + 2 Frontend + 1 QA |
| Risiko Tertinggi | Modul 3, 5, 6 (harus senior) |

---

*Dokumen ini disusun sebagai bagian dari perencanaan proyek ERP PT PPSU*
*Versi: 1.0 | Tanggal: 21 Januari 2026*
