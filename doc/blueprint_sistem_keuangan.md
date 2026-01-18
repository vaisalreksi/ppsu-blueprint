# 💰 Blueprint Modul: Sistem Keuangan
## PT Pembangunan Prasarana Sumatera Utara (Perseroda)

> [!IMPORTANT]
> **PRIORITAS: URGENT** - Sistem ini menggantikan aplikasi journal.id yang memiliki masa berlaku terbatas.

---

## 1. Latar Belakang

### Kondisi Saat Ini (As-Is)

| Aspek | Kondisi | Risiko |
|-------|---------|--------|
| Sistem | Menggunakan **journal.id** (berbayar) | Ketergantungan vendor, biaya recurring |
| Masa Berlaku | Terbatas | Operasional terhenti jika tidak diperpanjang |
| Integrasi | Standalone, tidak terintegrasi | Data silo, duplikasi entry |
| Akses Data | Terbatas pada platform | Sulit tarik data untuk Direksi |
| Audit Trail | Terbatas | Kurang mendukung GCG |

### Kebutuhan Migrasi
Data historis dari **journal.id** harus dapat diimpor ke sistem baru untuk:
- Kontinuitas laporan keuangan
- Historical comparison
- Audit trail lengkap

---

## 2. Tujuan Modul

> **Membangun Sistem Keuangan terintegrasi yang mendukung standar akuntansi Indonesia, real-time reporting untuk Direksi, dan full audit trail untuk GCG.**

### Sasaran Utama
1. ✅ Menggantikan ketergantungan pada journal.id
2. ✅ Laporan keuangan sesuai SAK/PSAK
3. ✅ Integrasi dengan modul lain (HC, Umum, Operasional)
4. ✅ Real-time dashboard untuk manajemen
5. ✅ Audit trail lengkap setiap transaksi

---

## 3. Stakeholder

| Stakeholder | Peran | Kebutuhan Utama |
|-------------|-------|-----------------|
| Direksi | Approval & Monitoring | Dashboard real-time, laporan eksekutif |
| Manajer Keuangan | Operasional harian | Input jurnal, rekonsiliasi, laporan |
| Staff Akuntansi | Entry & verifikasi | Input mudah, validasi otomatis |
| Staff Pajak | Perhitungan & pelaporan | PPh, PPN, integrasi e-SPT |
| Auditor Internal | Pengawasan | Audit trail, sampling |
| Auditor Eksternal | Pemeriksaan | Akses laporan, supporting docs |

---

## 4. Kebutuhan Fungsional

### 4.1 General Ledger (GL)

```
FR-KEU-001: Sistem dapat mengelola Chart of Account (CoA) hierarkis
FR-KEU-002: Sistem dapat mencatat jurnal umum manual
FR-KEU-003: Sistem dapat menerima jurnal otomatis dari modul lain
FR-KEU-004: Sistem memvalidasi balance debit = kredit
FR-KEU-005: Sistem dapat melakukan posting ke buku besar
FR-KEU-006: Sistem menyediakan trial balance
```

**Struktur CoA:**
```
1xxx - Aset
  11xx - Aset Lancar
    1101 - Kas
    1102 - Bank
  12xx - Aset Tetap
2xxx - Liabilitas  
3xxx - Ekuitas
4xxx - Pendapatan
5xxx - Beban
```

### 4.2 Budget Control (Anggaran)

```
FR-KEU-010: Sistem dapat input RKA (Rencana Kerja Anggaran) tahunan
FR-KEU-011: Sistem dapat input revisi anggaran dengan approval
FR-KEU-012: Sistem memblokir transaksi jika melebihi anggaran (opsional)
FR-KEU-013: Sistem menyediakan early warning 80%, 90%, 100% pemakaian
FR-KEU-014: Sistem menyediakan laporan budget vs actual per unit
```

### 4.3 Account Payable (AP) - Hutang

```
FR-KEU-020: Sistem dapat mencatat invoice supplier
FR-KEU-021: Sistem dapat tracking aging hutang (30/60/90/120 hari)
FR-KEU-022: Sistem dapat mencatat pembayaran hutang
FR-KEU-023: Sistem dapat matching invoice dengan PO/GR
FR-KEU-024: Sistem dapat generate jadwal pembayaran
```

### 4.4 Account Receivable (AR) - Piutang

```
FR-KEU-030: Sistem dapat mencatat invoice penjualan
FR-KEU-031: Sistem dapat tracking aging piutang
FR-KEU-032: Sistem dapat mencatat penerimaan pembayaran
FR-KEU-033: Sistem dapat mengelola down payment
FR-KEU-034: Sistem dapat generate reminder penagihan
```

### 4.5 Kas & Bank

```
FR-KEU-040: Sistem dapat mencatat transaksi kas masuk/keluar
FR-KEU-041: Sistem dapat mencatat transaksi bank masuk/keluar
FR-KEU-042: Sistem dapat melakukan rekonsiliasi bank
FR-KEU-043: Sistem dapat menampilkan saldo real-time per rekening
FR-KEU-044: Sistem dapat integrasi mutasi bank (jika tersedia API)
```

### 4.6 Aset Tetap

```
FR-KEU-050: Sistem dapat mencatat data aset (harga, lokasi, kondisi)
FR-KEU-051: Sistem dapat menghitung penyusutan otomatis (SL/DD)
FR-KEU-052: Sistem dapat mencatat revaluasi/impairment
FR-KEU-053: Sistem dapat mencatat disposal/penghapusan aset
FR-KEU-054: Sistem dapat generate jurnal penyusutan bulanan
```

### 4.7 Pendapatan per Unit Bisnis

```
FR-KEU-060: Sistem dapat memisahkan pendapatan per unit bisnis
FR-KEU-061: Sistem dapat tracking pendapatan vs target per unit
FR-KEU-062: Sistem dapat generate P&L per unit bisnis
FR-KEU-063: Sistem dapat consolidate laporan seluruh unit
```

### 4.8 Laporan Keuangan

```
FR-KEU-070: Sistem dapat generate Neraca (Balance Sheet)
FR-KEU-071: Sistem dapat generate Laba Rugi (Income Statement)
FR-KEU-072: Sistem dapat generate Arus Kas (Cash Flow Statement)
FR-KEU-073: Sistem dapat generate Laporan Perubahan Ekuitas
FR-KEU-074: Sistem dapat generate Catatan atas Laporan Keuangan
FR-KEU-075: Laporan dapat di-export ke Excel/PDF
```

---

## 5. Import Data dari Sistem Eksternal (journal.id)

> [!IMPORTANT]
> Fitur krusial untuk migrasi dari sistem lama

### 5.1 Data yang Dapat Diimpor

| Data | Format | Prioritas |
|------|--------|-----------|
| Master CoA | CSV/Excel | Tinggi |
| Saldo Awal Akun | CSV/Excel | Tinggi |
| Data Jurnal Historis | CSV/Excel | Tinggi |
| Master Pelanggan | CSV | Sedang |
| Master Supplier | CSV | Sedang |
| Data AP Outstanding | CSV | Tinggi |
| Data AR Outstanding | CSV | Tinggi |
| Data Aset Tetap | CSV/Excel | Sedang |

### 5.2 Fitur Import

```
FR-IMP-001: Sistem menyediakan template import untuk setiap jenis data
FR-IMP-002: Sistem dapat validasi format & isi data sebelum import
FR-IMP-003: Sistem menampilkan preview data sebelum commit
FR-IMP-004: Sistem mencatat log import (tanggal, user, jumlah record)
FR-IMP-005: Sistem dapat rollback import jika terjadi error
FR-IMP-006: Sistem dapat mapping field dari format journal.id ke format baru
```

### 5.3 Proses Migrasi

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   Export    │───▶│   Mapping   │───▶│  Validasi   │───▶│   Import    │
│ Journal.id  │    │   Field     │    │   Data      │    │   Sistem    │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
      │                  │                  │                  │
      ▼                  ▼                  ▼                  ▼
  CSV/Excel         Template           Preview &          Commit &
  Download          Matching           Error Report       Log Audit
```

### 5.4 Validasi Import

| Validasi | Deskripsi |
|----------|-----------|
| Format | Tanggal, angka, teks sesuai ketentuan |
| Referential | Kode akun ada di master CoA |
| Balance | Total debit = kredit per jurnal |
| Duplicate | Cek nomor dokumen tidak duplikat |
| Required | Field wajib tidak boleh kosong |

---

## 6. Kebutuhan Non-Fungsional

| Kode | Aspek | Requirement |
|------|-------|-------------|
| NFR-01 | Security | Enkripsi data keuangan, role-based access |
| NFR-02 | Performance | Generate laporan < 10 detik |
| NFR-03 | Availability | Uptime 99.9% (critical system) |
| NFR-04 | Audit | Semua transaksi immutable, timestamped |
| NFR-05 | Backup | Backup 4 jam sekali, retensi 7 tahun |
| NFR-06 | Compliance | Sesuai SAK/PSAK Indonesia |
| NFR-07 | Export | Semua data dapat di-export (Excel, CSV, PDF) |

---

## 7. Diagram Proses Bisnis

### 7.1 Siklus Akuntansi

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│  Transaksi  │───▶│   Jurnal    │───▶│    Buku     │───▶│   Trial     │
│  Keuangan   │    │   Umum      │    │    Besar    │    │   Balance   │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
                                                               │
┌─────────────┐    ┌─────────────┐    ┌─────────────┐          │
│   Laporan   │◀───│  Jurnal     │◀───│  Adjustment │◀─────────┘
│   Keuangan  │    │  Penutup    │    │   Entry     │
└─────────────┘    └─────────────┘    └─────────────┘
```

### 7.2 Alur AP (Hutang)

```
Invoice Supplier ──▶ Verifikasi ──▶ Posting AP ──▶ Jadwal Bayar ──▶ Pembayaran ──▶ Pelunasan
```

### 7.3 Alur AR (Piutang)

```
Penjualan/Jasa ──▶ Invoice ──▶ Posting AR ──▶ Reminder ──▶ Penerimaan ──▶ Pelunasan
```

---

## 8. Entity Relationship Diagram (ERD)

### Entitas Utama

| Entity | Atribut Utama |
|--------|---------------|
| **ChartOfAccount** | kode, nama, level, parent_kode, jenis, saldo_normal |
| **JournalHeader** | id, nomor, tanggal, deskripsi, status, created_by, approved_by |
| **JournalDetail** | id, journal_id, coa_kode, debit, kredit, deskripsi |
| **Budget** | id, tahun, coa_kode, unit_bisnis, amount, revisi_ke |
| **Supplier** | id, kode, nama, alamat, npwp, bank_account |
| **APInvoice** | id, supplier_id, nomor, tanggal, due_date, amount, paid_amount, status |
| **Customer** | id, kode, nama, alamat, npwp |
| **ARInvoice** | id, customer_id, nomor, tanggal, due_date, amount, paid_amount, status |
| **BankAccount** | id, kode, nama_bank, no_rekening, saldo |
| **FixedAsset** | id, kode, nama, kategori, tanggal_perolehan, harga, umur_ekonomis |
| **ImportLog** | id, jenis_data, filename, record_count, status, imported_by |

---

## 9. Integrasi dengan Modul Lain

| Modul | Jenis Integrasi | Data Flow |
|-------|-----------------|-----------|
| **Human Capital** | Payroll → Jurnal Gaji | HC kirim data gaji → auto generate jurnal |
| **Bagian Umum** | PO/Invoice → AP | Purchase → trigger posting hutang |
| **Operasional Transportasi** | Pendapatan Tiket → AR | Penjualan tiket → posting pendapatan |
| **Operasional PRSU** | Pendapatan Sewa → AR | Invoice sewa → posting pendapatan |
| **Operasional Teknik** | Pendapatan Proyek → AR | Termin proyek → posting pendapatan |
| **Dashboard Top Mgmt** | Laporan Eksekutif | Pull data keuangan real-time |
| **CACM** | Audit Trail | Log semua transaksi untuk sampling |

---

## 10. Role & Permission Matrix

| Fitur | Staff | Supervisor | Manajer | Direksi | Auditor |
|-------|:-----:|:----------:|:-------:|:-------:|:-------:|
| Input Jurnal | ✅ | ✅ | ✅ | ❌ | ❌ |
| Approve Jurnal | ❌ | ✅ | ✅ | ✅ | ❌ |
| Input AP/AR | ✅ | ✅ | ✅ | ❌ | ❌ |
| Rekonsiliasi Bank | ❌ | ✅ | ✅ | ❌ | ❌ |
| Import Data | ❌ | ❌ | ✅ | ❌ | ❌ |
| Lihat Laporan | ✅ | ✅ | ✅ | ✅ | ✅ |
| Kelola CoA | ❌ | ❌ | ✅ | ❌ | ❌ |

---

## 11. Timeline Implementasi

| Fase | Aktivitas | Durasi |
|------|-----------|--------|
| **Fase 1** | Setup CoA & Master Data | 2 minggu |
| **Fase 2** | General Ledger & Jurnal | 3 minggu |
| **Fase 3** | AP/AR Module | 3 minggu |
| **Fase 4** | Kas & Bank | 2 minggu |
| **Fase 5** | Fixed Asset | 2 minggu |
| **Fase 6** | Budget Control | 2 minggu |
| **Fase 7** | Laporan Keuangan | 2 minggu |
| **Fase 8** | Import dari journal.id | 2 minggu |
| **Fase 9** | Integrasi & UAT | 2 minggu |
| | **Total** | **20 minggu** |

---

## 12. Kesimpulan

Sistem Keuangan merupakan modul **mission-critical** yang akan:

> [!IMPORTANT]
> - **Menggantikan** ketergantungan pada journal.id
> - **Mengintegrasikan** seluruh transaksi keuangan lintas unit
> - **Menyediakan** laporan real-time untuk manajemen
> - **Mendukung** GCG dengan audit trail lengkap

Fitur **Import Data** dari journal.id memastikan:
- Kontinuitas historis data keuangan
- Transisi smooth tanpa kehilangan data
- Perbandingan year-on-year tetap valid

---

*Dokumen ini disusun sebagai bagian dari analisis sistem PT PPSU Perseroda*
*Versi: 1.0 | Tanggal: 17 Januari 2026*
