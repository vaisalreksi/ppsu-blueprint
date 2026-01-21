// ============================================
// MODUL 3 - SISTEM KEUANGAN
// PT Pembangunan Prasarana Sumatera Utara (Perseroda)
// ============================================

const modul_keuangan = {
    id: 'modul_keuangan',
    title: 'Modul 3 - Sistem Keuangan',
    subtitle: 'General Ledger, AP/AR, Budget Control, Aset Tetap, dan Laporan Keuangan Terintegrasi',
    icon: '💰',
    menuTitle: 'Sistem Keuangan',

    // ============================================
    // HASIL ANALISA
    // ============================================
    analisa: {
        title: 'Hasil Analisa - Sistem Keuangan',
        items: [
            {
                icon: '🎯',
                iconBg: 'rgba(37, 99, 235, 0.1)',
                iconColor: '#2563eb',
                title: 'Tujuan Modul',
                content: `Membangun Sistem Keuangan terintegrasi yang mendukung standar akuntansi Indonesia (SAK/PSAK), 
                         real-time reporting untuk Direksi, dan full audit trail untuk GCG. 
                         <strong>Menggantikan ketergantungan pada journal.id.</strong>`
            },
            {
                icon: '🚨',
                iconBg: 'rgba(239, 68, 68, 0.1)',
                iconColor: '#ef4444',
                title: 'Kondisi Saat Ini (Masalah)',
                content: `<strong>1. Sistem:</strong> Menggunakan journal.id (berbayar, masa berlaku terbatas)<br>
                         <strong>2. Integrasi:</strong> Standalone, tidak terintegrasi dengan modul lain<br>
                         <strong>3. Akses:</strong> Sulit tarik data real-time untuk Direksi<br>
                         <strong>4. Audit:</strong> Audit trail terbatas, kurang mendukung GCG`
            },
            {
                icon: '✅',
                iconBg: 'rgba(16, 185, 129, 0.1)',
                iconColor: '#10b981',
                title: 'Fitur Utama (8 Kelompok)',
                content: `<strong>1. General Ledger:</strong> CoA, jurnal, buku besar, trial balance<br>
                         <strong>2. Budget Control:</strong> RKA, revisi, early warning, budget vs actual<br>
                         <strong>3. Account Payable:</strong> Invoice supplier, aging, pembayaran<br>
                         <strong>4. Account Receivable:</strong> Invoice penjualan, penagihan<br>
                         <strong>5. Kas & Bank:</strong> Transaksi, rekonsiliasi, saldo real-time<br>
                         <strong>6. Aset Tetap:</strong> Data aset, penyusutan, disposal<br>
                         <strong>7. Pendapatan per Unit:</strong> P&L per unit bisnis<br>
                         <strong>8. Laporan Keuangan:</strong> Neraca, Laba Rugi, Arus Kas`
            },
            {
                icon: '📥',
                iconBg: 'rgba(139, 92, 246, 0.1)',
                iconColor: '#8b5cf6',
                title: 'Import Data dari journal.id',
                content: `<strong>Data Import:</strong> CoA, saldo awal, jurnal historis, AP/AR outstanding<br>
                         <strong>Format:</strong> CSV/Excel dengan template mapping<br>
                         <strong>Fitur:</strong> Validasi, preview, rollback, log audit<br>
                         <strong>Migrasi:</strong> Export → Mapping → Validasi → Import`
            },
            {
                icon: '👤',
                iconBg: 'rgba(245, 158, 11, 0.1)',
                iconColor: '#f59e0b',
                title: 'Aktor Terlibat',
                content: `<strong>1. Direksi:</strong> Approval & monitoring dashboard<br>
                         <strong>2. Manajer Keuangan:</strong> Operasional harian, laporan<br>
                         <strong>3. Staff Akuntansi:</strong> Input jurnal, verifikasi<br>
                         <strong>4. Staff Pajak:</strong> PPh, PPN, e-SPT<br>
                         <strong>5. Auditor:</strong> Audit trail, sampling`
            },
            {
                icon: '🔗',
                iconBg: 'rgba(6, 182, 212, 0.1)',
                iconColor: '#06b6d4',
                title: 'Integrasi dengan Modul Lain',
                content: `<strong>Human Capital:</strong> Payroll → Jurnal Gaji otomatis<br>
                         <strong>Bagian Umum:</strong> PO/Invoice → Posting AP<br>
                         <strong>Operasional:</strong> Pendapatan tiket/sewa → AR<br>
                         <strong>Dashboard:</strong> Laporan eksekutif real-time<br>
                         <strong>CACM:</strong> Audit trail untuk sampling`
            },
            {
                icon: '📋',
                iconBg: 'rgba(236, 72, 153, 0.1)',
                iconColor: '#ec4899',
                title: 'Audit Trail & Compliance',
                content: `<strong>📝 Voucher:</strong> Setiap transaksi dengan nomor voucher terstandar<br>
                         <strong>✅ Otorisasi:</strong> Multi-level approval dengan timestamp<br>
                         <strong>📅 History:</strong> Log lengkap siapa, kapan, apa yang diubah<br>
                         <strong>🔒 Immutable:</strong> Jurnal posting tidak bisa diedit (hanya balik)<br>
                         <strong>📊 PSAK:</strong> Laporan sesuai standar akuntansi Indonesia`
            }
        ]
    },

    // ============================================
    // MERMAID DIAGRAM
    // ============================================
    diagram: {
        title: 'Diagram Alur - Sistem Keuangan',
        mermaid: `flowchart LR

%% ===================== GENERAL LEDGER =====================
subgraph GL["📒 GENERAL LEDGER"]
    direction TB
    G1[Transaksi] --> G2[Jurnal<br>Umum]
    G2 --> G3[Buku<br>Besar]
    G3 --> G4[Trial<br>Balance]
    G4 --> G5[Adjustment]
    G5 --> G6[Closing]
end

%% ===================== BUDGET CONTROL =====================
subgraph BUDGET["💹 BUDGET CONTROL"]
    direction TB
    B1[📊 RKA<br>Tahunan] --> B2[Alokasi<br>per Unit]
    B2 --> B3[Realisasi]
    B3 --> B4{% Terpakai?}
    B4 -->|> 80%| B5[⚠️ Warning]
    B4 -->|> 100%| B6[🚫 Block]
    B4 -->|< 80%| B7[✅ OK]
end

%% ===================== AP / AR =====================
subgraph APAR["💳 AP / AR MONITORING"]
    direction TB
    A1[AP Invoice] --> A2[Aging<br>30/60/90]
    A2 --> A3[Payment<br>Schedule]
    A4[AR Invoice] --> A5[Aging<br>Piutang]
    A5 --> A6[Reminder<br>Penagihan]
end

%% ===================== KAS & BANK =====================
subgraph KASBANK["🏦 KAS & BANK"]
    direction TB
    K1[Transaksi<br>Kas/Bank] --> K2[Rekonsiliasi]
    K2 --> K3[Saldo<br>Real-time]
    K3 --> K4[Dashboard<br>Kas Harian]
end

%% ===================== ASET =====================
subgraph ASET["🏢 ASET & PENYUSUTAN"]
    direction TB
    S1[📋 Kartu<br>Aset] --> S2[Hitung<br>Penyusutan]
    S2 --> S3{Impairment?}
    S3 -->|Ya| S4[Penurunan<br>Nilai]
    S3 -->|Tidak| S5[Jurnal<br>Bulanan]
    S4 --> S5
end

%% ===================== AUDIT =====================
subgraph AUDIT["📝 AUDIT TRAIL"]
    direction TB
    U1[Generate<br>Voucher] --> U2[Maker<br>Input]
    U2 --> U3[Checker<br>Verify]
    U3 --> U4[Approver<br>Approve]
    U4 --> U5[🔒 Posted<br>Immutable]
end

%% ===================== REPORT =====================
subgraph REPORT["📊 LAPORAN KEUANGAN"]
    direction TB
    R1[Neraca]
    R2[Laba Rugi]
    R3[Arus Kas]
    R4[P&L per<br>Unit Bisnis]
end

%% ===================== NODE TAMBAHAN =====================
CACM[(🔍 MODUL<br>CACM)]

%% ===================== FLOW ANTAR MODUL =====================
G2 --> U1
S5 --> G2
K1 --> G2
A3 --> K1
A6 --> K1

G6 --> R1
G6 --> R2
G6 --> R3
B3 --> R4

U5 --> CACM

%% ===================== STYLING =====================
style GL fill:#dbeafe,stroke:#3b82f6,color:#1e3a5f
style BUDGET fill:#dcfce7,stroke:#22c55e,color:#166534
style APAR fill:#fef3c7,stroke:#f59e0b,color:#78350f
style KASBANK fill:#e0e7ff,stroke:#6366f1,color:#3730a3
style ASET fill:#fce7f3,stroke:#ec4899,color:#831843
style AUDIT fill:#f3e8ff,stroke:#a855f7,color:#581c87
style REPORT fill:#ccfbf1,stroke:#14b8a6,color:#134e4a
style CACM fill:#fef2f2,stroke:#ef4444,color:#7f1d1d`
    },

    // ============================================
    // PROTOTYPE HTML
    // ============================================
    prototype: {
        title: 'Prototype UI - Sistem Keuangan',
        html: `
            <div class="prototype-container">
                <div class="prototype-header">
                    <h3>📱 Preview Prototype UI</h3>
                </div>
                
                <!-- Dashboard Keuangan -->
                <div class="prototype-mockup">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);">
                        <span class="mockup-title">💰 Dashboard Keuangan</span>
                    </div>
                    <div class="mockup-content">
                        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
                            <div style="background: linear-gradient(135deg, #22c55e, #16a34a); color: white; padding: 1rem; border-radius: 12px; text-align: center;">
                                <div style="font-size: 0.7rem; opacity: 0.9; margin-bottom: 0.25rem;">Saldo Kas & Bank</div>
                                <div style="font-size: 1.25rem; font-weight: 700;">Rp 2.45 M</div>
                            </div>
                            <div style="background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: white; padding: 1rem; border-radius: 12px; text-align: center;">
                                <div style="font-size: 0.7rem; opacity: 0.9; margin-bottom: 0.25rem;">Total Piutang</div>
                                <div style="font-size: 1.25rem; font-weight: 700;">Rp 1.28 M</div>
                            </div>
                            <div style="background: linear-gradient(135deg, #ef4444, #dc2626); color: white; padding: 1rem; border-radius: 12px; text-align: center;">
                                <div style="font-size: 0.7rem; opacity: 0.9; margin-bottom: 0.25rem;">Total Hutang</div>
                                <div style="font-size: 1.25rem; font-weight: 700;">Rp 856 Jt</div>
                            </div>
                            <div style="background: linear-gradient(135deg, #8b5cf6, #7c3aed); color: white; padding: 1rem; border-radius: 12px; text-align: center;">
                                <div style="font-size: 0.7rem; opacity: 0.9; margin-bottom: 0.25rem;">Realisasi Budget</div>
                                <div style="font-size: 1.25rem; font-weight: 700;">67.5%</div>
                            </div>
                        </div>

                        <!-- Budget Warning -->
                        <div style="background: #fef3c7; border: 1px solid #f59e0b; padding: 0.75rem 1rem; border-radius: 8px; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                            <span style="font-size: 1.25rem;">⚠️</span>
                            <div style="font-size: 0.85rem;">
                                <strong>Early Warning:</strong> Unit PRSU mencapai 85% pemakaian budget operasional
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Form Input Jurnal -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header">
                        <span class="mockup-title">📝 Input Jurnal Umum</span>
                        <div class="mockup-actions">
                            <button class="mockup-btn">+ Baru</button>
                        </div>
                    </div>
                    <div class="mockup-content">
                        <div style="background: #ecfdf5; border: 1px solid #10b981; padding: 0.75rem 1rem; border-radius: 8px; margin-bottom: 1rem; font-size: 0.85rem;">
                            📋 <strong>No. Jurnal:</strong> JU-2026-01-0045 (Auto-generated)
                        </div>
                        
                        <div class="mockup-grid">
                            <div class="mockup-form-group">
                                <label class="mockup-label">Tanggal *</label>
                                <input type="date" class="mockup-input" value="2026-01-18">
                            </div>
                            <div class="mockup-form-group">
                                <label class="mockup-label">Referensi</label>
                                <input type="text" class="mockup-input" placeholder="No. dokumen sumber">
                            </div>
                        </div>

                        <div class="mockup-form-group">
                            <label class="mockup-label">Deskripsi *</label>
                            <input type="text" class="mockup-input" placeholder="Keterangan transaksi">
                        </div>

                        <!-- Journal Lines -->
                        <div style="background: #f8fafc; border-radius: 8px; padding: 1rem; margin: 1rem 0;">
                            <table class="mockup-table" style="margin: 0;">
                                <thead>
                                    <tr>
                                        <th style="width: 40%;">Akun</th>
                                        <th style="width: 25%; text-align: right;">Debit</th>
                                        <th style="width: 25%; text-align: right;">Kredit</th>
                                        <th style="width: 10%;"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <select class="mockup-select" style="width: 100%; padding: 0.5rem;">
                                                <option>1102 - Bank Sumut</option>
                                            </select>
                                        </td>
                                        <td><input type="text" class="mockup-input" value="15,000,000" style="text-align: right;"></td>
                                        <td><input type="text" class="mockup-input" value="" style="text-align: right;"></td>
                                        <td><button style="background: #ef4444; color: white; border: none; padding: 0.25rem 0.5rem; border-radius: 4px; cursor: pointer;">×</button></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <select class="mockup-select" style="width: 100%; padding: 0.5rem;">
                                                <option>4101 - Pendapatan Tiket Kapal</option>
                                            </select>
                                        </td>
                                        <td><input type="text" class="mockup-input" value="" style="text-align: right;"></td>
                                        <td><input type="text" class="mockup-input" value="15,000,000" style="text-align: right;"></td>
                                        <td><button style="background: #ef4444; color: white; border: none; padding: 0.25rem 0.5rem; border-radius: 4px; cursor: pointer;">×</button></td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr style="background: #e2e8f0;">
                                        <td style="font-weight: 600;">TOTAL</td>
                                        <td style="text-align: right; font-weight: 600; color: #16a34a;">15,000,000</td>
                                        <td style="text-align: right; font-weight: 600; color: #16a34a;">15,000,000</td>
                                        <td></td>
                                    </tr>
                                </tfoot>
                            </table>
                            <button style="margin-top: 0.75rem; background: #e2e8f0; border: none; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer; font-size: 0.85rem;">+ Tambah Baris</button>
                        </div>

                        <div style="display: flex; gap: 1rem;">
                            <button class="mockup-submit" style="flex: 1;">💾 Simpan Draft</button>
                            <button class="mockup-submit" style="flex: 1; background: #22c55e;">✅ Simpan & Posting</button>
                        </div>
                    </div>
                </div>

                <!-- Import Data -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);">
                        <span class="mockup-title">📥 Import Data dari journal.id</span>
                    </div>
                    <div class="mockup-content">
                        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 1rem;">
                            <div style="background: #f8fafc; border: 2px dashed #cbd5e1; padding: 1.25rem; border-radius: 12px; text-align: center; cursor: pointer;">
                                <div style="font-size: 2rem; margin-bottom: 0.5rem;">📊</div>
                                <div style="font-weight: 600; font-size: 0.9rem;">Chart of Account</div>
                                <div style="font-size: 0.75rem; color: #64748b;">Master CoA</div>
                            </div>
                            <div style="background: #f8fafc; border: 2px dashed #cbd5e1; padding: 1.25rem; border-radius: 12px; text-align: center; cursor: pointer;">
                                <div style="font-size: 2rem; margin-bottom: 0.5rem;">📖</div>
                                <div style="font-weight: 600; font-size: 0.9rem;">Jurnal Historis</div>
                                <div style="font-size: 0.75rem; color: #64748b;">Data transaksi</div>
                            </div>
                            <div style="background: #f8fafc; border: 2px dashed #cbd5e1; padding: 1.25rem; border-radius: 12px; text-align: center; cursor: pointer;">
                                <div style="font-size: 2rem; margin-bottom: 0.5rem;">💳</div>
                                <div style="font-weight: 600; font-size: 0.9rem;">AP/AR Outstanding</div>
                                <div style="font-size: 0.75rem; color: #64748b;">Hutang & piutang</div>
                            </div>
                        </div>

                        <div style="background: #f0fdf4; border: 1px solid #22c55e; padding: 1rem; border-radius: 8px;">
                            <div style="font-weight: 600; margin-bottom: 0.5rem;">✅ Import Terakhir:</div>
                            <div style="font-size: 0.85rem; color: #64748b;">
                                <strong>Jurnal Historis</strong> - 1,245 record berhasil diimport<br>
                                <span style="font-size: 0.75rem;">18 Jan 2026, 09:15 oleh Admin Keuangan</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Daftar AP -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header">
                        <span class="mockup-title">💳 Account Payable (Hutang)</span>
                        <div class="mockup-actions">
                            <button class="mockup-btn">🔍 Filter</button>
                            <button class="mockup-btn">📥 Export</button>
                        </div>
                    </div>
                    <div class="mockup-content" style="padding: 0;">
                        <table class="mockup-table">
                            <thead>
                                <tr>
                                    <th>No. Invoice</th>
                                    <th>Supplier</th>
                                    <th>Tanggal</th>
                                    <th>Due Date</th>
                                    <th style="text-align: right;">Jumlah</th>
                                    <th style="text-align: right;">Terbayar</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style="background: #fef2f2;">
                                    <td style="font-weight: 500;">INV-2026-001</td>
                                    <td>PT Pertamina</td>
                                    <td>05/01/2026</td>
                                    <td style="color: #dc2626; font-weight: 500;">15/01/2026</td>
                                    <td style="text-align: right;">Rp 125.000.000</td>
                                    <td style="text-align: right;">Rp 0</td>
                                    <td><span class="mockup-status rejected">🔴 Overdue</span></td>
                                </tr>
                                <tr style="background: #fefce8;">
                                    <td style="font-weight: 500;">INV-2026-008</td>
                                    <td>CV Karya Mandiri</td>
                                    <td>10/01/2026</td>
                                    <td>25/01/2026</td>
                                    <td style="text-align: right;">Rp 45.000.000</td>
                                    <td style="text-align: right;">Rp 0</td>
                                    <td><span class="mockup-status pending">🟡 Due Soon</span></td>
                                </tr>
                                <tr>
                                    <td style="font-weight: 500;">INV-2026-012</td>
                                    <td>PT PLN</td>
                                    <td>15/01/2026</td>
                                    <td>15/02/2026</td>
                                    <td style="text-align: right;">Rp 28.500.000</td>
                                    <td style="text-align: right;">Rp 0</td>
                                    <td><span class="mockup-status approved">🟢 Open</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Laporan Keuangan -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);">
                        <span class="mockup-title">📊 Laporan Keuangan</span>
                    </div>
                    <div class="mockup-content">
                        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem;">
                            <div style="background: #f8fafc; padding: 1.25rem; border-radius: 12px; text-align: center; cursor: pointer; transition: all 0.2s;">
                                <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">📋</div>
                                <div style="font-weight: 600;">Neraca</div>
                                <div style="font-size: 0.75rem; color: #64748b;">Balance Sheet</div>
                            </div>
                            <div style="background: #f8fafc; padding: 1.25rem; border-radius: 12px; text-align: center; cursor: pointer;">
                                <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">📈</div>
                                <div style="font-weight: 600;">Laba Rugi</div>
                                <div style="font-size: 0.75rem; color: #64748b;">Income Statement</div>
                            </div>
                            <div style="background: #f8fafc; padding: 1.25rem; border-radius: 12px; text-align: center; cursor: pointer;">
                                <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">💵</div>
                                <div style="font-weight: 600;">Arus Kas</div>
                                <div style="font-size: 0.75rem; color: #64748b;">Cash Flow</div>
                            </div>
                            <div style="background: #f8fafc; padding: 1.25rem; border-radius: 12px; text-align: center; cursor: pointer;">
                                <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">📊</div>
                                <div style="font-weight: 600;">Budget vs Actual</div>
                                <div style="font-size: 0.75rem; color: #64748b;">Per Unit Bisnis</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- General Ledger / Buku Besar -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);">
                        <span class="mockup-title">📖 General Ledger - Buku Besar</span>
                        <div class="mockup-actions">
                            <select style="padding: 0.25rem 0.5rem; border-radius: 4px; border: none;">
                                <option>Januari 2026</option>
                            </select>
                        </div>
                    </div>
                    <div class="mockup-content">
                        <!-- Account Selection -->
                        <div class="mockup-grid" style="margin-bottom: 1rem;">
                            <div class="mockup-form-group">
                                <label class="mockup-label">Akun</label>
                                <select class="mockup-select">
                                    <option>1102 - Bank Sumut</option>
                                    <option>1101 - Kas</option>
                                    <option>1201 - Piutang Usaha</option>
                                    <option>2101 - Hutang Usaha</option>
                                </select>
                            </div>
                            <div style="display: flex; align-items: flex-end;">
                                <button style="background: #22c55e; color: white; border: none; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer;">🔍 Tampilkan</button>
                            </div>
                        </div>

                        <!-- Ledger Detail -->
                        <div style="background: #f0fdf4; border: 1px solid #22c55e; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
                            <div style="display: flex; justify-content: space-between;">
                                <div><strong>Akun:</strong> 1102 - Bank Sumut</div>
                                <div><strong>Saldo Awal:</strong> Rp 1.250.000.000</div>
                            </div>
                        </div>

                        <table class="mockup-table" style="font-size: 0.85rem;">
                            <thead>
                                <tr>
                                    <th>Tanggal</th>
                                    <th>No. Jurnal</th>
                                    <th>Keterangan</th>
                                    <th style="text-align: right;">Debit</th>
                                    <th style="text-align: right;">Kredit</th>
                                    <th style="text-align: right;">Saldo</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>02/01</td>
                                    <td>JU-2026-01-0012</td>
                                    <td>Penerimaan tiket kapal</td>
                                    <td style="text-align: right;">15.000.000</td>
                                    <td style="text-align: right;">-</td>
                                    <td style="text-align: right; font-weight: 600;">1.265.000.000</td>
                                </tr>
                                <tr>
                                    <td>05/01</td>
                                    <td>JU-2026-01-0018</td>
                                    <td>Pembayaran BBM</td>
                                    <td style="text-align: right;">-</td>
                                    <td style="text-align: right;">45.000.000</td>
                                    <td style="text-align: right; font-weight: 600;">1.220.000.000</td>
                                </tr>
                                <tr>
                                    <td>10/01</td>
                                    <td>JU-2026-01-0025</td>
                                    <td>Pendapatan sewa PRSU</td>
                                    <td style="text-align: right;">125.000.000</td>
                                    <td style="text-align: right;">-</td>
                                    <td style="text-align: right; font-weight: 600;">1.345.000.000</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr style="background: #dcfce7;">
                                    <td colspan="3"><strong>Saldo Akhir</strong></td>
                                    <td style="text-align: right;"><strong>140.000.000</strong></td>
                                    <td style="text-align: right;"><strong>45.000.000</strong></td>
                                    <td style="text-align: right;"><strong>1.345.000.000</strong></td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>

                <!-- Trial Balance -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);">
                        <span class="mockup-title">⚖️ Trial Balance - Neraca Saldo</span>
                        <span style="background: rgba(255,255,255,0.2); padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">Per 31 Januari 2026</span>
                    </div>
                    <div class="mockup-content" style="padding: 0;">
                        <table class="mockup-table" style="font-size: 0.85rem;">
                            <thead>
                                <tr>
                                    <th>Kode</th>
                                    <th>Nama Akun</th>
                                    <th style="text-align: right;">Debit</th>
                                    <th style="text-align: right;">Kredit</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1101</td>
                                    <td>Kas</td>
                                    <td style="text-align: right;">125.450.000</td>
                                    <td style="text-align: right;">-</td>
                                </tr>
                                <tr>
                                    <td>1102</td>
                                    <td>Bank Sumut</td>
                                    <td style="text-align: right;">1.345.000.000</td>
                                    <td style="text-align: right;">-</td>
                                </tr>
                                <tr>
                                    <td>1201</td>
                                    <td>Piutang Usaha</td>
                                    <td style="text-align: right;">856.000.000</td>
                                    <td style="text-align: right;">-</td>
                                </tr>
                                <tr>
                                    <td>1501</td>
                                    <td>Aset Tetap</td>
                                    <td style="text-align: right;">15.250.000.000</td>
                                    <td style="text-align: right;">-</td>
                                </tr>
                                <tr>
                                    <td>1502</td>
                                    <td>Akumulasi Penyusutan</td>
                                    <td style="text-align: right;">-</td>
                                    <td style="text-align: right;">3.450.000.000</td>
                                </tr>
                                <tr>
                                    <td>2101</td>
                                    <td>Hutang Usaha</td>
                                    <td style="text-align: right;">-</td>
                                    <td style="text-align: right;">654.000.000</td>
                                </tr>
                                <tr>
                                    <td>3101</td>
                                    <td>Modal Disetor</td>
                                    <td style="text-align: right;">-</td>
                                    <td style="text-align: right;">10.000.000.000</td>
                                </tr>
                                <tr>
                                    <td>4101</td>
                                    <td>Pendapatan Usaha</td>
                                    <td style="text-align: right;">-</td>
                                    <td style="text-align: right;">3.472.450.000</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr style="background: #e0e7ff;">
                                    <td colspan="2"><strong>TOTAL</strong></td>
                                    <td style="text-align: right;"><strong>17.576.450.000</strong></td>
                                    <td style="text-align: right;"><strong>17.576.450.000</strong></td>
                                </tr>
                            </tfoot>
                        </table>
                        <div style="background: #dcfce7; padding: 0.75rem 1rem; display: flex; align-items: center; gap: 0.5rem;">
                            <span>✅</span> <strong>BALANCE</strong> - Debit = Kredit
                        </div>
                    </div>
                </div>

                <!-- Budget Control -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);">
                        <span class="mockup-title">💰 Budget Control - Anggaran vs Realisasi</span>
                    </div>
                    <div class="mockup-content">
                        <!-- Summary Cards -->
                        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.75rem; margin-bottom: 1rem;">
                            <div style="background: #dbeafe; padding: 0.75rem; border-radius: 8px; text-align: center;">
                                <div style="font-size: 0.7rem; color: #1d4ed8;">Total Anggaran</div>
                                <div style="font-size: 1.1rem; font-weight: 700; color: #1d4ed8;">Rp 12.5 M</div>
                            </div>
                            <div style="background: #dcfce7; padding: 0.75rem; border-radius: 8px; text-align: center;">
                                <div style="font-size: 0.7rem; color: #166534;">Realisasi</div>
                                <div style="font-size: 1.1rem; font-weight: 700; color: #166534;">Rp 8.43 M</div>
                            </div>
                            <div style="background: #fef3c7; padding: 0.75rem; border-radius: 8px; text-align: center;">
                                <div style="font-size: 0.7rem; color: #92400e;">Sisa Anggaran</div>
                                <div style="font-size: 1.1rem; font-weight: 700; color: #92400e;">Rp 4.07 M</div>
                            </div>
                            <div style="background: #f3e8ff; padding: 0.75rem; border-radius: 8px; text-align: center;">
                                <div style="font-size: 0.7rem; color: #7c3aed;">% Realisasi</div>
                                <div style="font-size: 1.1rem; font-weight: 700; color: #7c3aed;">67.4%</div>
                            </div>
                        </div>

                        <!-- Budget per Unit -->
                        <table class="mockup-table" style="font-size: 0.85rem;">
                            <thead>
                                <tr>
                                    <th>Unit Bisnis</th>
                                    <th style="text-align: right;">Anggaran</th>
                                    <th style="text-align: right;">Realisasi</th>
                                    <th style="text-align: right;">Variance</th>
                                    <th>Progress</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style="background: #fef2f2;">
                                    <td>🏢 PRSU (Venue)</td>
                                    <td style="text-align: right;">2.500.000.000</td>
                                    <td style="text-align: right;">2.125.000.000</td>
                                    <td style="text-align: right; color: #ef4444;">-375.000.000</td>
                                    <td>
                                        <div style="background: #e2e8f0; border-radius: 4px; height: 8px; overflow: hidden;">
                                            <div style="width: 85%; background: #ef4444; height: 100%;"></div>
                                        </div>
                                    </td>
                                    <td><span style="background: #ef4444; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">🔴 85%</span></td>
                                </tr>
                                <tr>
                                    <td>🚢 Transportasi</td>
                                    <td style="text-align: right;">3.200.000.000</td>
                                    <td style="text-align: right;">2.240.000.000</td>
                                    <td style="text-align: right; color: #22c55e;">+960.000.000</td>
                                    <td>
                                        <div style="background: #e2e8f0; border-radius: 4px; height: 8px; overflow: hidden;">
                                            <div style="width: 70%; background: #22c55e; height: 100%;"></div>
                                        </div>
                                    </td>
                                    <td><span style="background: #22c55e; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">🟢 70%</span></td>
                                </tr>
                                <tr>
                                    <td>🏗️ Teknik & Proyek</td>
                                    <td style="text-align: right;">4.500.000.000</td>
                                    <td style="text-align: right;">2.925.000.000</td>
                                    <td style="text-align: right; color: #22c55e;">+1.575.000.000</td>
                                    <td>
                                        <div style="background: #e2e8f0; border-radius: 4px; height: 8px; overflow: hidden;">
                                            <div style="width: 65%; background: #22c55e; height: 100%;"></div>
                                        </div>
                                    </td>
                                    <td><span style="background: #22c55e; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">🟢 65%</span></td>
                                </tr>
                                <tr style="background: #fefce8;">
                                    <td>🏢 Overhead/Umum</td>
                                    <td style="text-align: right;">2.300.000.000</td>
                                    <td style="text-align: right;">1.840.000.000</td>
                                    <td style="text-align: right; color: #f59e0b;">+460.000.000</td>
                                    <td>
                                        <div style="background: #e2e8f0; border-radius: 4px; height: 8px; overflow: hidden;">
                                            <div style="width: 80%; background: #f59e0b; height: 100%;"></div>
                                        </div>
                                    </td>
                                    <td><span style="background: #f59e0b; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">🟡 80%</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- AR Monitoring -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);">
                        <span class="mockup-title">💵 Account Receivable Monitoring (Piutang)</span>
                    </div>
                    <div class="mockup-content">
                        <!-- AR Aging Summary -->
                        <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 0.5rem; margin-bottom: 1rem;">
                            <div style="background: #dcfce7; padding: 0.75rem; border-radius: 8px; text-align: center;">
                                <div style="font-size: 0.65rem; color: #166534;">Current</div>
                                <div style="font-size: 1rem; font-weight: 700; color: #166534;">Rp 450 Jt</div>
                                <div style="font-size: 0.6rem; color: #64748b;">35%</div>
                            </div>
                            <div style="background: #dbeafe; padding: 0.75rem; border-radius: 8px; text-align: center;">
                                <div style="font-size: 0.65rem; color: #1d4ed8;">1-30 Hari</div>
                                <div style="font-size: 1rem; font-weight: 700; color: #1d4ed8;">Rp 320 Jt</div>
                                <div style="font-size: 0.6rem; color: #64748b;">25%</div>
                            </div>
                            <div style="background: #fef3c7; padding: 0.75rem; border-radius: 8px; text-align: center;">
                                <div style="font-size: 0.65rem; color: #92400e;">31-60 Hari</div>
                                <div style="font-size: 1rem; font-weight: 700; color: #92400e;">Rp 256 Jt</div>
                                <div style="font-size: 0.6rem; color: #64748b;">20%</div>
                            </div>
                            <div style="background: #fed7aa; padding: 0.75rem; border-radius: 8px; text-align: center;">
                                <div style="font-size: 0.65rem; color: #c2410c;">61-90 Hari</div>
                                <div style="font-size: 1rem; font-weight: 700; color: #c2410c;">Rp 128 Jt</div>
                                <div style="font-size: 0.6rem; color: #64748b;">10%</div>
                            </div>
                            <div style="background: #fecaca; padding: 0.75rem; border-radius: 8px; text-align: center;">
                                <div style="font-size: 0.65rem; color: #991b1b;">> 90 Hari</div>
                                <div style="font-size: 1rem; font-weight: 700; color: #991b1b;">Rp 128 Jt</div>
                                <div style="font-size: 0.6rem; color: #64748b;">10%</div>
                            </div>
                        </div>

                        <table class="mockup-table" style="font-size: 0.8rem;">
                            <thead>
                                <tr>
                                    <th>No. Invoice</th>
                                    <th>Customer</th>
                                    <th>Tgl Invoice</th>
                                    <th>Due Date</th>
                                    <th style="text-align: right;">Jumlah</th>
                                    <th>Aging</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style="background: #fef2f2;">
                                    <td>INV-AR-2025-089</td>
                                    <td>PT Pembangunan Jaya</td>
                                    <td>15/10/2025</td>
                                    <td>15/11/2025</td>
                                    <td style="text-align: right;">85.000.000</td>
                                    <td style="color: #ef4444; font-weight: 600;">95 hari</td>
                                    <td><span style="background: #ef4444; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.65rem;">🔴 Overdue</span></td>
                                </tr>
                                <tr>
                                    <td>INV-AR-2026-012</td>
                                    <td>Pemprov SUMUT</td>
                                    <td>05/01/2026</td>
                                    <td>05/02/2026</td>
                                    <td style="text-align: right;">250.000.000</td>
                                    <td>14 hari</td>
                                    <td><span style="background: #22c55e; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.65rem;">🟢 Current</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Kas & Bank -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%);">
                        <span class="mockup-title">🏦 Daftar Kas dan Bank</span>
                    </div>
                    <div class="mockup-content">
                        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 1rem;">
                            <div style="background: #f0fdfa; border: 2px solid #14b8a6; padding: 1rem; border-radius: 12px;">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                                    <span style="font-weight: 600;">💵 Kas Besar</span>
                                    <span style="background: #22c55e; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.65rem;">Aktif</span>
                                </div>
                                <div style="font-size: 1.25rem; font-weight: 700; color: #0d9488;">Rp 125.450.000</div>
                                <div style="font-size: 0.7rem; color: #64748b; margin-top: 0.25rem;">Update: 19 Jan 2026 09:00</div>
                            </div>
                            <div style="background: #f0fdfa; border: 2px solid #14b8a6; padding: 1rem; border-radius: 12px;">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                                    <span style="font-weight: 600;">🏦 Bank Sumut</span>
                                    <span style="background: #22c55e; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.65rem;">Rekonsiliasi OK</span>
                                </div>
                                <div style="font-size: 1.25rem; font-weight: 700; color: #0d9488;">Rp 1.345.000.000</div>
                                <div style="font-size: 0.7rem; color: #64748b; margin-top: 0.25rem;">Rek: 115-02-xxxxx-1</div>
                            </div>
                            <div style="background: #fef3c7; border: 2px solid #f59e0b; padding: 1rem; border-radius: 12px;">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                                    <span style="font-weight: 600;">🏦 Bank Mandiri</span>
                                    <span style="background: #f59e0b; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.65rem;">Perlu Rekon</span>
                                </div>
                                <div style="font-size: 1.25rem; font-weight: 700; color: #92400e;">Rp 456.780.000</div>
                                <div style="font-size: 0.7rem; color: #64748b; margin-top: 0.25rem;">Selisih: Rp 2.500.000</div>
                            </div>
                        </div>

                        <div style="background: #f8fafc; padding: 0.75rem 1rem; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
                            <div>
                                <strong>Total Kas & Bank:</strong>
                                <span style="font-size: 1.25rem; font-weight: 700; color: #0d9488; margin-left: 0.5rem;">Rp 1.927.230.000</span>
                            </div>
                            <button style="background: #14b8a6; color: white; border: none; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer;">🔄 Rekonsiliasi Bank</button>
                        </div>
                    </div>
                </div>

                <!-- Fixed Assets -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #a855f7 0%, #9333ea 100%);">
                        <span class="mockup-title">🏢 Aset Tetap & Penyusutan</span>
                        <div class="mockup-actions">
                            <button class="mockup-btn" style="background: white; color: #9333ea;">+ Tambah Aset</button>
                        </div>
                    </div>
                    <div class="mockup-content">
                        <!-- Asset Summary -->
                        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.75rem; margin-bottom: 1rem;">
                            <div style="background: #f3e8ff; padding: 0.75rem; border-radius: 8px; text-align: center;">
                                <div style="font-size: 0.7rem; color: #7c3aed;">Nilai Perolehan</div>
                                <div style="font-size: 1rem; font-weight: 700; color: #7c3aed;">Rp 15.25 M</div>
                            </div>
                            <div style="background: #fef3c7; padding: 0.75rem; border-radius: 8px; text-align: center;">
                                <div style="font-size: 0.7rem; color: #92400e;">Akum. Penyusutan</div>
                                <div style="font-size: 1rem; font-weight: 700; color: #92400e;">Rp 3.45 M</div>
                            </div>
                            <div style="background: #dcfce7; padding: 0.75rem; border-radius: 8px; text-align: center;">
                                <div style="font-size: 0.7rem; color: #166534;">Nilai Buku</div>
                                <div style="font-size: 1rem; font-weight: 700; color: #166534;">Rp 11.8 M</div>
                            </div>
                            <div style="background: #fecaca; padding: 0.75rem; border-radius: 8px; text-align: center;">
                                <div style="font-size: 0.7rem; color: #991b1b;">Penyusutan/Bln</div>
                                <div style="font-size: 1rem; font-weight: 700; color: #991b1b;">Rp 127 Jt</div>
                            </div>
                        </div>

                        <table class="mockup-table" style="font-size: 0.8rem;">
                            <thead>
                                <tr>
                                    <th>Kode Aset</th>
                                    <th>Nama Aset</th>
                                    <th>Kategori</th>
                                    <th style="text-align: right;">Nilai Perolehan</th>
                                    <th style="text-align: right;">Akum. Penyusutan</th>
                                    <th style="text-align: right;">Nilai Buku</th>
                                    <th>Umur</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>FA-VES-001</td>
                                    <td>KM Toba I</td>
                                    <td>🚢 Kapal</td>
                                    <td style="text-align: right;">5.500.000.000</td>
                                    <td style="text-align: right;">1.100.000.000</td>
                                    <td style="text-align: right; font-weight: 600;">4.400.000.000</td>
                                    <td>4/20 thn</td>
                                </tr>
                                <tr>
                                    <td>FA-VES-002</td>
                                    <td>KM Toba II</td>
                                    <td>🚢 Kapal</td>
                                    <td style="text-align: right;">4.800.000.000</td>
                                    <td style="text-align: right;">720.000.000</td>
                                    <td style="text-align: right; font-weight: 600;">4.080.000.000</td>
                                    <td>3/20 thn</td>
                                </tr>
                                <tr>
                                    <td>FA-BLD-001</td>
                                    <td>Gedung PRSU</td>
                                    <td>🏢 Bangunan</td>
                                    <td style="text-align: right;">3.200.000.000</td>
                                    <td style="text-align: right;">960.000.000</td>
                                    <td style="text-align: right; font-weight: 600;">2.240.000.000</td>
                                    <td>6/20 thn</td>
                                </tr>
                                <tr style="background: #fef2f2;">
                                    <td>FA-VEH-005</td>
                                    <td>Kendaraan Operasional</td>
                                    <td>🚗 Kendaraan</td>
                                    <td style="text-align: right;">450.000.000</td>
                                    <td style="text-align: right;">360.000.000</td>
                                    <td style="text-align: right; font-weight: 600; color: #ef4444;">90.000.000</td>
                                    <td style="color: #ef4444;">8/10 thn ⚠️</td>
                                </tr>
                            </tbody>
                        </table>
                        <div style="margin-top: 0.75rem; font-size: 0.8rem; color: #64748b;">
                            ⚠️ Aset dengan nilai buku < 20% perlu review untuk disposal atau penurunan nilai
                        </div>
                    </div>
                </div>

                <!-- Revenue by Business Unit -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #ec4899 0%, #be185d 100%);">
                        <span class="mockup-title">📊 Pendapatan per Unit Bisnis</span>
                        <span style="background: rgba(255,255,255,0.2); padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">YTD Januari 2026</span>
                    </div>
                    <div class="mockup-content">
                        <table class="mockup-table" style="font-size: 0.85rem;">
                            <thead>
                                <tr>
                                    <th>Unit Bisnis</th>
                                    <th style="text-align: right;">Pendapatan</th>
                                    <th style="text-align: right;">Biaya Langsung</th>
                                    <th style="text-align: right;">Laba Kotor</th>
                                    <th style="text-align: right;">Margin</th>
                                    <th>Trend</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>🚢 <strong>Transportasi Kapal</strong></td>
                                    <td style="text-align: right;">1.850.000.000</td>
                                    <td style="text-align: right;">1.295.000.000</td>
                                    <td style="text-align: right; color: #22c55e; font-weight: 600;">555.000.000</td>
                                    <td style="text-align: right;">30%</td>
                                    <td style="color: #22c55e;">↑ +12%</td>
                                </tr>
                                <tr>
                                    <td>🏢 <strong>PRSU (Sewa Venue)</strong></td>
                                    <td style="text-align: right;">1.250.000.000</td>
                                    <td style="text-align: right;">375.000.000</td>
                                    <td style="text-align: right; color: #22c55e; font-weight: 600;">875.000.000</td>
                                    <td style="text-align: right;">70%</td>
                                    <td style="color: #ef4444;">↓ -5%</td>
                                </tr>
                                <tr>
                                    <td>🏗️ <strong>Jasa Konstruksi</strong></td>
                                    <td style="text-align: right;">2.450.000.000</td>
                                    <td style="text-align: right;">2.082.500.000</td>
                                    <td style="text-align: right; color: #22c55e; font-weight: 600;">367.500.000</td>
                                    <td style="text-align: right;">15%</td>
                                    <td style="color: #22c55e;">↑ +8%</td>
                                </tr>
                                <tr>
                                    <td>📦 <strong>Lain-lain</strong></td>
                                    <td style="text-align: right;">125.000.000</td>
                                    <td style="text-align: right;">50.000.000</td>
                                    <td style="text-align: right; color: #22c55e; font-weight: 600;">75.000.000</td>
                                    <td style="text-align: right;">60%</td>
                                    <td style="color: #64748b;">-</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr style="background: #fce7f3;">
                                    <td><strong>TOTAL</strong></td>
                                    <td style="text-align: right;"><strong>5.675.000.000</strong></td>
                                    <td style="text-align: right;"><strong>3.802.500.000</strong></td>
                                    <td style="text-align: right; font-weight: 700; color: #22c55e;">1.872.500.000</td>
                                    <td style="text-align: right;"><strong>33%</strong></td>
                                    <td></td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>

                <!-- Audit Trail -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #64748b 0%, #475569 100%);">
                        <span class="mockup-title">📋 Audit Trail - Voucher & Otorisasi</span>
                        <div class="mockup-actions">
                            <button class="mockup-btn" style="background: white; color: #475569;">🔍 Filter</button>
                            <button class="mockup-btn" style="background: white; color: #475569;">📄 Export</button>
                        </div>
                    </div>
                    <div class="mockup-content">
                        <!-- Voucher Detail -->
                        <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
                                <div style="font-weight: 600;">🎫 Voucher: VCR-2026-01-0125</div>
                                <span style="background: #22c55e; color: white; padding: 0.25rem 0.75rem; border-radius: 4px; font-size: 0.75rem;">✅ POSTED</span>
                            </div>
                            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; font-size: 0.85rem;">
                                <div>
                                    <div style="color: #64748b;">Tanggal</div>
                                    <div style="font-weight: 500;">19 Januari 2026</div>
                                </div>
                                <div>
                                    <div style="color: #64748b;">Jenis Transaksi</div>
                                    <div style="font-weight: 500;">Pembayaran Supplier</div>
                                </div>
                                <div>
                                    <div style="color: #64748b;">Nilai</div>
                                    <div style="font-weight: 500;">Rp 45.000.000</div>
                                </div>
                            </div>
                        </div>

                        <!-- Authorization Flow -->
                        <div style="font-weight: 600; margin-bottom: 0.75rem;">✅ Otorisasi Flow</div>
                        <div style="display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1rem;">
                            <div style="display: flex; align-items: center; gap: 1rem; background: #dcfce7; padding: 0.75rem; border-radius: 8px;">
                                <div style="width: 32px; height: 32px; background: #22c55e; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center;">✅</div>
                                <div style="flex: 1;">
                                    <div style="font-weight: 500;">Created</div>
                                    <div style="font-size: 0.75rem; color: #64748b;">Staff Keuangan - Siti Aminah | 19 Jan 2026 08:30</div>
                                </div>
                            </div>
                            <div style="display: flex; align-items: center; gap: 1rem; background: #dcfce7; padding: 0.75rem; border-radius: 8px;">
                                <div style="width: 32px; height: 32px; background: #22c55e; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center;">✅</div>
                                <div style="flex: 1;">
                                    <div style="font-weight: 500;">Verified</div>
                                    <div style="font-size: 0.75rem; color: #64748b;">Supervisor - Ahmad Wijaya | 19 Jan 2026 09:15</div>
                                </div>
                            </div>
                            <div style="display: flex; align-items: center; gap: 1rem; background: #dcfce7; padding: 0.75rem; border-radius: 8px;">
                                <div style="width: 32px; height: 32px; background: #22c55e; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center;">✅</div>
                                <div style="flex: 1;">
                                    <div style="font-weight: 500;">Approved</div>
                                    <div style="font-size: 0.75rem; color: #64748b;">Manajer Keuangan - Budi Santoso | 19 Jan 2026 10:00</div>
                                </div>
                            </div>
                            <div style="display: flex; align-items: center; gap: 1rem; background: #dcfce7; padding: 0.75rem; border-radius: 8px;">
                                <div style="width: 32px; height: 32px; background: #22c55e; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center;">✅</div>
                                <div style="flex: 1;">
                                    <div style="font-weight: 500;">Posted to GL</div>
                                    <div style="font-size: 0.75rem; color: #64748b;">System Auto | 19 Jan 2026 10:00</div>
                                </div>
                            </div>
                        </div>

                        <!-- History Log -->
                        <div style="font-weight: 600; margin-bottom: 0.5rem;">📅 History Log</div>
                        <table class="mockup-table" style="font-size: 0.8rem;">
                            <thead>
                                <tr>
                                    <th>Timestamp</th>
                                    <th>User</th>
                                    <th>Action</th>
                                    <th>Detail</th>
                                    <th>IP Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>19/01 10:00:05</td>
                                    <td>System</td>
                                    <td>POST</td>
                                    <td>Posted to Journal JU-2026-01-0125</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>19/01 10:00:00</td>
                                    <td>Budi Santoso</td>
                                    <td>APPROVE</td>
                                    <td>Approved voucher</td>
                                    <td>192.168.1.50</td>
                                </tr>
                                <tr>
                                    <td>19/01 09:15:22</td>
                                    <td>Ahmad Wijaya</td>
                                    <td>VERIFY</td>
                                    <td>Verified amount and documents</td>
                                    <td>192.168.1.45</td>
                                </tr>
                                <tr>
                                    <td>19/01 08:30:15</td>
                                    <td>Siti Aminah</td>
                                    <td>CREATE</td>
                                    <td>Created payment voucher</td>
                                    <td>192.168.1.42</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `
    }
};

// ============================================
// REGISTER MODULE
// ============================================
if (typeof window.ppsuModules === 'undefined') {
    window.ppsuModules = [];
}
window.ppsuModules.push(modul_keuangan);
