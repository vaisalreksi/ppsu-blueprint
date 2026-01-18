# 🏢 Blueprint Modul: Sistem Bagian Umum
## PT Pembangunan Prasarana Sumatera Utara (Perseroda)

---

## 1. Latar Belakang

### Ruang Lingkup Bagian Umum
Bagian Umum bertanggung jawab atas pengelolaan:
- Aset perusahaan (gedung, kendaraan, peralatan)
- Logistik & persediaan barang
- Pengadaan barang & jasa
- Vendor management
- Fasilitas & maintenance

### Kondisi Saat Ini (As-Is)

| Aspek | Kondisi | Risiko |
|-------|---------|--------|
| Manajemen Aset | Manual (Excel/paper) | Data tidak akurat, aset hilang |
| Inventori | Tidak real-time | Stock out, overstock |
| Pengadaan | Manual, tidak terstandar | Proses lama, tidak transparan |
| Vendor | Tidak terdata lengkap | Sulit evaluasi kinerja |
| Maintenance | Reaktif, tidak terjadwal | Kerusakan mendadak, biaya tinggi |

### Dampak Masalah
- ⏱️ Proses pengadaan lama (2-4 minggu)
- 📉 Aset tidak termonitor → kehilangan/kerusakan
- 💸 Biaya maintenance tidak terkontrol
- ❌ Tidak ada histori vendor untuk evaluasi

---

## 2. Tujuan Modul

> **Membangun sistem pengelolaan aset, inventori, dan pengadaan yang terintegrasi, transparan, dan mendukung efisiensi operasional.**

### Sasaran Utama
1. ✅ Database aset terpusat dengan tracking lokasi & kondisi
2. ✅ Inventori real-time dengan alert reorder point
3. ✅ Proses pengadaan terstandar dengan approval workflow
4. ✅ Vendor database dengan scoring kinerja
5. ✅ Jadwal maintenance preventif otomatis

---

## 3. Stakeholder

| Stakeholder | Peran | Kebutuhan Utama |
|-------------|-------|-----------------|
| Direksi | Approval pengadaan besar | Dashboard nilai aset, laporan |
| Manajer Umum | Kelola operasional | Monitoring aset, inventori, vendor |
| Staff Umum | Input & eksekusi | Entry data, tracking |
| Unit Bisnis | User/requester | Permintaan barang, lapor kerusakan |
| Keuangan | Validasi budget | Integrasi AP, budget checking |
| Auditor | Pengawasan | Audit trail, nilai aset |

---

## 4. Kebutuhan Fungsional

### 4.1 Manajemen Aset

```
FR-BU-001: Sistem dapat mencatat data aset (kode, nama, kategori, lokasi, kondisi)
FR-BU-002: Sistem dapat melacak perpindahan/mutasi aset antar lokasi
FR-BU-003: Sistem dapat mencatat histori perbaikan/maintenance aset
FR-BU-004: Sistem dapat menghitung nilai buku aset (integrasi Keuangan)
FR-BU-005: Sistem dapat generate label/QR code untuk aset
FR-BU-006: Sistem dapat melakukan stock opname aset berkala
```

**Kategori Aset:**
- 🏢 Gedung & Bangunan
- 🚗 Kendaraan
- 💻 Peralatan IT
- 🪑 Peralatan Kantor
- 🔧 Mesin & Peralatan Operasional

### 4.2 Logistik & Inventori

```
FR-BU-010: Sistem dapat mencatat master barang dengan kategori
FR-BU-011: Sistem dapat mencatat penerimaan barang (Good Receipt)
FR-BU-012: Sistem dapat mencatat pengeluaran barang
FR-BU-013: Sistem menampilkan stock real-time per gudang
FR-BU-014: Sistem memberikan alert saat stock mencapai reorder point
FR-BU-015: Sistem dapat melakukan stock opname inventori
FR-BU-016: Sistem mencatat barang rusak/expired untuk write-off
```

### 4.3 Pengadaan (Procurement)

```
FR-BU-020: Sistem dapat mencatat Purchase Requisition (PR) dari unit
FR-BU-021: Sistem menerapkan approval workflow berdasarkan nilai
FR-BU-022: Sistem dapat generate Request for Quotation (RFQ) ke vendor
FR-BU-023: Sistem dapat mencatat dan membandingkan penawaran vendor
FR-BU-024: Sistem dapat generate Purchase Order (PO) setelah approval
FR-BU-025: Sistem dapat matching PO - Good Receipt - Invoice
FR-BU-026: Sistem melakukan budget checking sebelum approval
```

**Approval Workflow (berdasarkan nilai):**
| Nilai | Approver |
|-------|----------|
| < Rp 10 juta | Manajer Umum |
| Rp 10-50 juta | Direktur terkait |
| > Rp 50 juta | Direktur Utama |

### 4.4 Vendor Management

```
FR-BU-030: Sistem dapat mencatat master vendor (nama, alamat, NPWP, bank)
FR-BU-031: Sistem dapat mengkategorikan vendor (jenis barang/jasa)
FR-BU-032: Sistem mencatat histori transaksi per vendor
FR-BU-033: Sistem dapat menilai kinerja vendor (kualitas, waktu, harga)
FR-BU-034: Sistem dapat blacklist vendor bermasalah
FR-BU-035: Sistem menyediakan daftar vendor terpilih (approved vendor list)
```

### 4.5 Maintenance & Fasilitas

```
FR-BU-040: Sistem dapat menjadwalkan maintenance preventif
FR-BU-041: Sistem dapat menerima laporan kerusakan dari user
FR-BU-042: Sistem dapat tracking status perbaikan
FR-BU-043: Sistem mencatat histori maintenance per aset
FR-BU-044: Sistem dapat generate reminder jadwal maintenance
FR-BU-045: Sistem mencatat biaya maintenance per aset
```

---

## 5. Kebutuhan Non-Fungsional

| Kode | Aspek | Requirement |
|------|-------|-------------|
| NFR-01 | Security | Role-based access, approval workflow |
| NFR-02 | Performance | Response time < 3 detik |
| NFR-03 | Mobile | Mobile-friendly untuk stock opname |
| NFR-04 | Barcode | Support scan QR/barcode untuk aset |
| NFR-05 | Audit | Log semua perubahan data |
| NFR-06 | Integration | API ke Keuangan (AP, Fixed Asset) |

---

## 6. Diagram Proses Bisnis

### 6.1 Alur Pengadaan (Procurement)

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│  Purchase   │───▶│   Budget    │───▶│  Approval   │───▶│    RFQ      │
│ Requisition │    │   Check     │    │  Workflow   │    │  ke Vendor  │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
                                                               │
┌─────────────┐    ┌─────────────┐    ┌─────────────┐          │
│   Invoice   │◀───│    Good     │◀───│  Purchase   │◀─────────┘
│  Matching   │    │   Receipt   │    │   Order     │
└─────────────┘    └─────────────┘    └─────────────┘
      │
      ▼
┌─────────────┐
│  Posting    │
│     AP      │
└─────────────┘
```

### 6.2 Alur Permintaan Barang Internal

```
Request ──▶ Cek Stock ──▶ Tersedia? ──Yes──▶ Pengeluaran ──▶ Update Stock
                              │
                              No
                              │
                              ▼
                         Generate PR ──▶ Proses Pengadaan
```

### 6.3 Alur Maintenance

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   Laporan   │───▶│  Diagnosa   │───▶│   Eksekusi  │───▶│   Update    │
│  Kerusakan  │    │  & Planning │    │  Perbaikan  │    │  Histori    │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘

        OR

┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   Jadwal    │───▶│  Reminder   │───▶│  Eksekusi   │
│  Preventif  │    │  Otomatis   │    │  & Update   │
└─────────────┘    └─────────────┘    └─────────────┘
```

---

## 7. Entity Relationship Diagram (ERD)

### Entitas Utama

| Entity | Atribut Utama |
|--------|---------------|
| **Asset** | kode, nama, kategori, lokasi, kondisi, tanggal_perolehan, nilai_buku, status |
| **AssetMutation** | id, asset_id, dari_lokasi, ke_lokasi, tanggal, alasan, pic |
| **AssetMaintenance** | id, asset_id, tanggal, jenis, deskripsi, biaya, vendor_id |
| **InventoryItem** | kode, nama, kategori, satuan, reorder_point, gudang_id |
| **InventoryStock** | id, item_id, gudang_id, qty, last_updated |
| **InventoryTransaction** | id, item_id, jenis (in/out), qty, tanggal, referensi |
| **PurchaseRequisition** | id, nomor, tanggal, requester, status, total |
| **PRDetail** | id, pr_id, item_desc, qty, est_price |
| **PurchaseOrder** | id, nomor, tanggal, vendor_id, status, total |
| **PODetail** | id, po_id, item_desc, qty, price |
| **GoodReceipt** | id, nomor, po_id, tanggal, received_by |
| **Vendor** | id, kode, nama, alamat, npwp, kategori, status, score |
| **VendorEvaluation** | id, vendor_id, po_id, score_quality, score_delivery, score_price |

---

## 8. Integrasi dengan Modul Lain

| Modul | Jenis Integrasi | Data Flow |
|-------|-----------------|-----------|
| **Keuangan** | PO → AP | PO approved → create AP invoice |
| **Keuangan** | Asset → Fixed Asset | Sync data aset & penyusutan |
| **Keuangan** | Budget Check | Validasi anggaran sebelum PO |
| **Operasional** | Permintaan barang | Request BBM, sparepart, ATK |
| **Dashboard** | Laporan | Nilai aset, status pengadaan |
| **CACM** | Audit Trail | Log transaksi untuk sampling |

---

## 9. Role & Permission Matrix

| Fitur | Staff | Supervisor | Manajer | Direksi | Keuangan |
|-------|:-----:|:----------:|:-------:|:-------:|:--------:|
| Input Aset | ✅ | ✅ | ✅ | ❌ | ❌ |
| Mutasi Aset | ✅ | ✅ | ✅ | ❌ | ❌ |
| Input PR | ✅ | ✅ | ✅ | ❌ | ❌ |
| Approve PR | ❌ | ✅ | ✅ | ✅ | ❌ |
| Create PO | ❌ | ✅ | ✅ | ❌ | ❌ |
| Good Receipt | ✅ | ✅ | ✅ | ❌ | ❌ |
| Kelola Vendor | ❌ | ✅ | ✅ | ❌ | ❌ |
| Blacklist Vendor | ❌ | ❌ | ✅ | ✅ | ❌ |
| Lihat Laporan | ✅ | ✅ | ✅ | ✅ | ✅ |

---

## 10. Laporan yang Dibutuhkan

### Laporan Aset
1. Daftar Aset per Kategori/Lokasi
2. Mutasi Aset (periode)
3. Nilai Buku Aset
4. Histori Maintenance per Aset
5. Aset yang perlu maintenance

### Laporan Inventori
1. Stock per Gudang
2. Kartu Stock (mutasi per item)
3. Item di bawah Reorder Point
4. Laporan Stock Opname

### Laporan Pengadaan
1. Status PR/PO (open, approved, completed)
2. Rekapitulasi Pengadaan per Periode
3. Lead Time Pengadaan
4. Vendor Performance Report

---

## 11. Timeline Implementasi

| Fase | Aktivitas | Durasi |
|------|-----------|--------|
| **Fase 1** | Master Data (Aset, Item, Vendor) | 2 minggu |
| **Fase 2** | Manajemen Aset & Mutasi | 3 minggu |
| **Fase 3** | Inventori & Stock | 2 minggu |
| **Fase 4** | Pengadaan (PR, PO, GR) | 4 minggu |
| **Fase 5** | Vendor Management | 2 minggu |
| **Fase 6** | Maintenance Module | 2 minggu |
| **Fase 7** | Integrasi & UAT | 2 minggu |
| | **Total** | **17 minggu** |

---

## 12. Risiko & Mitigasi

| Risiko | Dampak | Mitigasi |
|--------|--------|----------|
| Data aset tidak lengkap | Tinggi | Stock opname awal, cleanup data |
| User resistance | Sedang | Training, change management |
| Approval bottleneck | Sedang | Delegation rules, mobile approval |
| Integrasi keuangan | Sedang | API testing, parallel run |

---

## 13. Kriteria Sukses (KPI)

| KPI | Target | Cara Ukur |
|-----|--------|-----------|
| Akurasi data aset | > 98% | Stock opname vs sistem |
| Lead time pengadaan | < 7 hari kerja | Avg PR to PO |
| Stock accuracy | > 95% | Stock opname |
| Vendor on-time delivery | > 90% | Evaluasi vendor |
| Preventive maintenance ratio | > 70% | Preventif / total maintenance |

---

## 14. Kesimpulan

Sistem Bagian Umum akan mengintegrasikan:

> [!IMPORTANT]
> - **Aset Management** - Database terpusat dengan tracking lokasi & kondisi
> - **Inventori** - Stock real-time dengan alert otomatis
> - **Pengadaan** - Workflow terstandar dengan budget checking
> - **Vendor** - Database lengkap dengan performance scoring
> - **Maintenance** - Preventif terjadwal, reaktif termonitor

Manfaat utama:
- 📉 Mengurangi kehilangan/kerusakan aset
- ⏱️ Mempercepat proses pengadaan
- 💰 Mengontrol biaya maintenance
- 📊 Transparansi & audit trail lengkap

---

*Dokumen ini disusun sebagai bagian dari analisis sistem PT PPSU Perseroda*
*Versi: 1.0 | Tanggal: 18 Januari 2026*
