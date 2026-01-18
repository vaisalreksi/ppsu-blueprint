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
            }
        ]
    },

    // ============================================
    // MERMAID DIAGRAM
    // ============================================
    diagram: {
        title: 'Diagram Alur - Sistem Keuangan',
        mermaid: `flowchart TB
subgraph CYCLE["🔄 SIKLUS AKUNTANSI"]
    direction LR
    C1[Transaksi<br>Keuangan] --> C2[Jurnal<br>Umum]
    C2 --> C3[Buku<br>Besar]
    C3 --> C4[Trial<br>Balance]
    C4 --> C5[Adjustment<br>Entry]
    C5 --> C6[Jurnal<br>Penutup]
    C6 --> C7[Laporan<br>Keuangan]
end

subgraph INPUT["📥 SUMBER TRANSAKSI"]
    direction TB
    I1[💳 AP Invoice<br>dari Supplier] 
    I2[💵 AR Invoice<br>Penjualan/Jasa]
    I3[🏦 Transaksi<br>Kas & Bank]
    I4[📦 Jurnal Aset<br>& Penyusutan]
    I5[👥 Jurnal Gaji<br>dari HC]
end

subgraph AP["💳 ACCOUNT PAYABLE"]
    direction TB
    AP1[Invoice<br>Masuk] --> AP2[Verifikasi<br>& Matching]
    AP2 --> AP3[Posting<br>Hutang]
    AP3 --> AP4[Jadwal<br>Bayar]
    AP4 --> AP5[Pembayaran]
    AP5 --> AP6[Pelunasan]
end

subgraph AR["💵 ACCOUNT RECEIVABLE"]
    direction TB
    AR1[Penjualan<br>Jasa] --> AR2[Generate<br>Invoice]
    AR2 --> AR3[Posting<br>Piutang]
    AR3 --> AR4[Reminder<br>Penagihan]
    AR4 --> AR5[Penerimaan]
    AR5 --> AR6[Pelunasan]
end

subgraph IMPORT["📤 IMPORT DATA JOURNAL.ID"]
    direction TB
    IM1[Export<br>CSV/Excel] --> IM2[Mapping<br>Field]
    IM2 --> IM3[Validasi<br>Data]
    IM3 --> IM4{Valid?}
    IM4 -->|Ya| IM5[Import &<br>Commit]
    IM4 -->|Tidak| IM6[Error<br>Report]
    IM6 --> IM2
end

subgraph REPORT["📊 LAPORAN KEUANGAN"]
    direction TB
    R1[Neraca]
    R2[Laba Rugi]
    R3[Arus Kas]
    R4[Budget vs<br>Actual]
end

I1 --> AP1
I2 --> AR1
I3 --> C1
I4 --> C1
I5 --> C1
AP6 --> C1
AR6 --> C1
IM5 --> C2
C7 --> R1
C7 --> R2
C7 --> R3
C7 --> R4

style CYCLE fill:#dbeafe,stroke:#3b82f6,color:#1e3a5f
style AP fill:#fef3c7,stroke:#f59e0b,color:#78350f
style AR fill:#dcfce7,stroke:#22c55e,color:#166534
style IMPORT fill:#f3e8ff,stroke:#a855f7,color:#581c87
style REPORT fill:#e0e7ff,stroke:#6366f1,color:#3730a3
style INPUT fill:#fce7f3,stroke:#ec4899,color:#831843`
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
