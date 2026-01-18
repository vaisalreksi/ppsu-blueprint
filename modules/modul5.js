// ============================================
// MODUL 5 - SISTEM HUMAN CAPITAL
// PT Pembangunan Prasarana Sumatera Utara (Perseroda)
// ============================================

const modul_human_capital = {
    id: 'modul_human_capital',
    title: 'Modul 5 - Sistem Human Capital',
    subtitle: 'Kepegawaian, Presensi, Payroll, PPh 21, Cuti & Integrasi Keuangan',
    icon: '👥',
    menuTitle: 'Sistem Human Capital',

    // ============================================
    // HASIL ANALISA
    // ============================================
    analisa: {
        title: 'Hasil Analisa - Sistem Human Capital',
        items: [
            {
                icon: '🎯',
                iconBg: 'rgba(37, 99, 235, 0.1)',
                iconColor: '#2563eb',
                title: 'Tujuan Modul',
                content: `Membangun sistem pengelolaan SDM terintegrasi dengan payroll otomatis, 
                         perhitungan PPh 21 sesuai regulasi, dan integrasi langsung ke modul Keuangan 
                         untuk posting jurnal gaji otomatis.`
            },
            {
                icon: '🚨',
                iconBg: 'rgba(239, 68, 68, 0.1)',
                iconColor: '#ef4444',
                title: 'Kondisi Saat Ini (Masalah)',
                content: `<strong>1. Data Karyawan:</strong> Excel/paper-based, tidak terupdate<br>
                         <strong>2. Presensi:</strong> Mesin standalone, sulit rekap<br>
                         <strong>3. Payroll:</strong> Hitung manual Excel, 5-7 hari/bulan<br>
                         <strong>4. PPh 21:</strong> Hitung terpisah, risiko error<br>
                         <strong>5. Cuti:</strong> Saldo tidak akurat`
            },
            {
                icon: '✅',
                iconBg: 'rgba(16, 185, 129, 0.1)',
                iconColor: '#10b981',
                title: 'Fitur Utama (6 Kelompok)',
                content: `<strong>1. Kepegawaian:</strong> Database karyawan, histori mutasi<br>
                         <strong>2. Presensi:</strong> Clock in/out, lembur, integrasi mesin<br>
                         <strong>3. Payroll:</strong> Komponen gaji, slip digital, bank transfer<br>
                         <strong>4. PPh 21:</strong> Tarif progresif, PTKP, 1721-A1, e-SPT<br>
                         <strong>5. Cuti:</strong> Jenis cuti, saldo, approval workflow<br>
                         <strong>6. Penilaian:</strong> KPI, score kinerja`
            },
            {
                icon: '📥',
                iconBg: 'rgba(139, 92, 246, 0.1)',
                iconColor: '#8b5cf6',
                title: 'Import Data dari Sistem Existing',
                content: `<strong>Data Import:</strong> Master karyawan, histori gaji, saldo cuti, BPJS<br>
                         <strong>Format:</strong> CSV/Excel dengan template mapping<br>
                         <strong>Fitur:</strong> Validasi NIK/NPWP, preview, rollback<br>
                         <strong>Sync:</strong> Auto-generate NIK jika kosong`
            },
            {
                icon: '💰',
                iconBg: 'rgba(245, 158, 11, 0.1)',
                iconColor: '#f59e0b',
                title: 'Integrasi Keuangan (Real-time)',
                content: `<strong>Payroll Run:</strong> → Auto jurnal gaji (beban + hutang)<br>
                         <strong>Payment:</strong> → Jurnal pembayaran + update slip<br>
                         <strong>PPh 21:</strong> → Hutang pajak + jurnal setoran<br>
                         <strong>BPJS:</strong> → Posting beban + hutang BPJS`
            },
            {
                icon: '👤',
                iconBg: 'rgba(6, 182, 212, 0.1)',
                iconColor: '#06b6d4',
                title: 'Aktor Terlibat',
                content: `<strong>1. Manajer HC:</strong> Kelola payroll, karyawan<br>
                         <strong>2. Staff HC:</strong> Input data, presensi<br>
                         <strong>3. Atasan:</strong> Approve cuti, lembur<br>
                         <strong>4. Karyawan:</strong> Self-service (slip, cuti)<br>
                         <strong>5. Keuangan:</strong> Approve payroll, jurnal`
            }
        ]
    },

    // ============================================
    // MERMAID DIAGRAM
    // ============================================
    diagram: {
        title: 'Diagram Alur - Sistem Human Capital',
        mermaid: `flowchart TB
subgraph PAYROLL["💰 SIKLUS PAYROLL BULANAN"]
    direction TB
    P1[Cut-off<br>Presensi] --> P2[Rekap<br>Kehadiran]
    P2 --> P3[Hitung Gaji<br>+ Tunjangan]
    P3 --> P4[Hitung<br>Potongan]
    P4 --> P5[Hitung<br>PPh 21]
    P5 --> P6[Generate<br>Slip Gaji]
    P6 --> P7{Approval<br>Payroll}
    P7 -->|Approved| P8[Generate<br>Jurnal]
    P7 -->|Reject| P3
    P8 --> P9[Payment<br>& Update]
end

subgraph PPH["📋 PERHITUNGAN PPh 21"]
    direction TB
    T1[Penghasilan<br>Bruto] --> T2[- Biaya<br>Jabatan 5%]
    T2 --> T3[- Iuran<br>Pensiun]
    T3 --> T4[= Penghasilan<br>Neto]
    T4 --> T5[- PTKP]
    T5 --> T6[= PKP]
    T6 --> T7[× Tarif<br>Progresif]
    T7 --> T8[= PPh 21<br>Terutang]
end

subgraph CUTI["🏖️ MANAJEMEN CUTI"]
    direction TB
    C1[Karyawan<br>Ajukan] --> C2[Cek Saldo<br>Cuti]
    C2 --> C3{Saldo<br>Cukup?}
    C3 -->|Ya| C4[Atasan<br>Review]
    C3 -->|Tidak| C5[Rejected]
    C4 --> C6{Approved?}
    C6 -->|Ya| C7[Deduct<br>Saldo]
    C6 -->|Tidak| C5
end

subgraph IMPORT["📤 IMPORT DATA"]
    direction TB
    I1[Excel/CSV<br>Existing] --> I2[Mapping<br>Field]
    I2 --> I3[Validasi<br>NIK/NPWP]
    I3 --> I4{Valid?}
    I4 -->|Ya| I5[Import &<br>Commit]
    I4 -->|Tidak| I6[Error<br>Report]
end

P5 -.-> PPH
P8 --> KEU[(💰 MODUL<br>KEUANGAN)]
I5 --> EMP[(👥 DATABASE<br>KARYAWAN)]
C7 --> EMP

style PAYROLL fill:#dbeafe,stroke:#3b82f6,color:#1e3a5f
style PPH fill:#fef3c7,stroke:#f59e0b,color:#78350f
style CUTI fill:#dcfce7,stroke:#22c55e,color:#166534
style IMPORT fill:#f3e8ff,stroke:#a855f7,color:#581c87
style KEU fill:#fce7f3,stroke:#ec4899,color:#831843
style EMP fill:#e0e7ff,stroke:#6366f1,color:#3730a3`
    },

    // ============================================
    // PROTOTYPE HTML
    // ============================================
    prototype: {
        title: 'Prototype UI - Sistem Human Capital',
        html: `
            <div class="prototype-container">
                <div class="prototype-header">
                    <h3>📱 Preview Prototype UI</h3>
                </div>
                
                <!-- Dashboard HC -->
                <div class="prototype-mockup">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);">
                        <span class="mockup-title">👥 Dashboard Human Capital</span>
                    </div>
                    <div class="mockup-content">
                        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
                            <div style="background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: white; padding: 1rem; border-radius: 12px; text-align: center;">
                                <div style="font-size: 0.7rem; opacity: 0.9; margin-bottom: 0.25rem;">Total Karyawan</div>
                                <div style="font-size: 1.5rem; font-weight: 700;">156</div>
                                <div style="font-size: 0.65rem; opacity: 0.8;">Aktif</div>
                            </div>
                            <div style="background: linear-gradient(135deg, #22c55e, #16a34a); color: white; padding: 1rem; border-radius: 12px; text-align: center;">
                                <div style="font-size: 0.7rem; opacity: 0.9; margin-bottom: 0.25rem;">Hadir Hari Ini</div>
                                <div style="font-size: 1.5rem; font-weight: 700;">148</div>
                                <div style="font-size: 0.65rem; opacity: 0.8;">95%</div>
                            </div>
                            <div style="background: linear-gradient(135deg, #f59e0b, #d97706); color: white; padding: 1rem; border-radius: 12px; text-align: center;">
                                <div style="font-size: 0.7rem; opacity: 0.9; margin-bottom: 0.25rem;">Cuti Pending</div>
                                <div style="font-size: 1.5rem; font-weight: 700;">5</div>
                                <div style="font-size: 0.65rem; opacity: 0.8;">Menunggu approval</div>
                            </div>
                            <div style="background: linear-gradient(135deg, #ec4899, #be185d); color: white; padding: 1rem; border-radius: 12px; text-align: center;">
                                <div style="font-size: 0.7rem; opacity: 0.9; margin-bottom: 0.25rem;">Payroll Status</div>
                                <div style="font-size: 1.5rem; font-weight: 700;">⏳</div>
                                <div style="font-size: 0.65rem; opacity: 0.8;">Januari 2026</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Slip Gaji -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);">
                        <span class="mockup-title">💵 Slip Gaji - Januari 2026</span>
                        <div class="mockup-actions">
                            <button class="mockup-btn" style="background: white; color: #16a34a;">📥 Download PDF</button>
                        </div>
                    </div>
                    <div class="mockup-content">
                        <div style="background: #f8fafc; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; font-size: 0.85rem;">
                                <div><strong>NIK:</strong> EMP-2024-0045</div>
                                <div><strong>Periode:</strong> Januari 2026</div>
                                <div><strong>Nama:</strong> Budi Santoso</div>
                                <div><strong>Status:</strong> K/1 (Kawin 1 anak)</div>
                                <div><strong>Jabatan:</strong> Staff Keuangan</div>
                                <div><strong>NPWP:</strong> 12.345.678.9-123.000</div>
                            </div>
                        </div>

                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
                            <!-- Pendapatan -->
                            <div>
                                <div style="font-weight: 600; margin-bottom: 0.5rem; color: #22c55e;">📈 PENDAPATAN</div>
                                <table style="width: 100%; font-size: 0.85rem;">
                                    <tr><td>Gaji Pokok</td><td style="text-align: right;">Rp 8.500.000</td></tr>
                                    <tr><td>Tunj. Jabatan</td><td style="text-align: right;">Rp 1.500.000</td></tr>
                                    <tr><td>Tunj. Transport</td><td style="text-align: right;">Rp 750.000</td></tr>
                                    <tr><td>Tunj. Makan</td><td style="text-align: right;">Rp 500.000</td></tr>
                                    <tr><td>Lembur (12 jam)</td><td style="text-align: right;">Rp 650.000</td></tr>
                                    <tr style="font-weight: 600; border-top: 1px solid #e2e8f0;">
                                        <td>Total Pendapatan</td>
                                        <td style="text-align: right; color: #22c55e;">Rp 11.900.000</td>
                                    </tr>
                                </table>
                            </div>
                            <!-- Potongan -->
                            <div>
                                <div style="font-weight: 600; margin-bottom: 0.5rem; color: #ef4444;">📉 POTONGAN</div>
                                <table style="width: 100%; font-size: 0.85rem;">
                                    <tr><td>PPh 21</td><td style="text-align: right;">Rp 425.000</td></tr>
                                    <tr><td>BPJS Kesehatan</td><td style="text-align: right;">Rp 85.000</td></tr>
                                    <tr><td>BPJS Ketenagakerjaan</td><td style="text-align: right;">Rp 170.000</td></tr>
                                    <tr><td>Pinjaman Karyawan</td><td style="text-align: right;">Rp 500.000</td></tr>
                                    <tr style="font-weight: 600; border-top: 1px solid #e2e8f0;">
                                        <td>Total Potongan</td>
                                        <td style="text-align: right; color: #ef4444;">Rp 1.180.000</td>
                                    </tr>
                                </table>
                            </div>
                        </div>

                        <div style="background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%); color: white; padding: 1rem; border-radius: 8px; margin-top: 1rem; display: flex; justify-content: space-between; align-items: center;">
                            <div style="font-size: 1rem; font-weight: 600;">TAKE HOME PAY</div>
                            <div style="font-size: 1.5rem; font-weight: 700;">Rp 10.720.000</div>
                        </div>
                    </div>
                </div>

                <!-- Payroll Run -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);">
                        <span class="mockup-title">⚙️ Payroll Run - Januari 2026</span>
                    </div>
                    <div class="mockup-content">
                        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 1rem;">
                            <div style="background: #f8fafc; padding: 1rem; border-radius: 8px; text-align: center;">
                                <div style="font-size: 2rem; margin-bottom: 0.25rem;">156</div>
                                <div style="font-size: 0.8rem; color: #64748b;">Karyawan</div>
                            </div>
                            <div style="background: #f8fafc; padding: 1rem; border-radius: 8px; text-align: center;">
                                <div style="font-size: 1.25rem; margin-bottom: 0.25rem; font-weight: 600;">Rp 1.85 M</div>
                                <div style="font-size: 0.8rem; color: #64748b;">Total Gaji Bruto</div>
                            </div>
                            <div style="background: #f8fafc; padding: 1rem; border-radius: 8px; text-align: center;">
                                <div style="font-size: 1.25rem; margin-bottom: 0.25rem; font-weight: 600;">Rp 125 Jt</div>
                                <div style="font-size: 0.8rem; color: #64748b;">Total PPh 21</div>
                            </div>
                        </div>

                        <!-- Progress Steps -->
                        <div style="display: flex; justify-content: space-between; margin: 1.5rem 0; position: relative;">
                            <div style="position: absolute; top: 15px; left: 10%; right: 10%; height: 3px; background: #e2e8f0; z-index: 0;"></div>
                            <div style="position: absolute; top: 15px; left: 10%; width: 60%; height: 3px; background: #22c55e; z-index: 0;"></div>
                            
                            <div style="text-align: center; z-index: 1;">
                                <div style="width: 30px; height: 30px; background: #22c55e; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 0.5rem;">✓</div>
                                <div style="font-size: 0.7rem;">Cut-off</div>
                            </div>
                            <div style="text-align: center; z-index: 1;">
                                <div style="width: 30px; height: 30px; background: #22c55e; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 0.5rem;">✓</div>
                                <div style="font-size: 0.7rem;">Rekap</div>
                            </div>
                            <div style="text-align: center; z-index: 1;">
                                <div style="width: 30px; height: 30px; background: #22c55e; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 0.5rem;">✓</div>
                                <div style="font-size: 0.7rem;">Hitung</div>
                            </div>
                            <div style="text-align: center; z-index: 1;">
                                <div style="width: 30px; height: 30px; background: #3b82f6; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 0.5rem; animation: pulse 2s infinite;">4</div>
                                <div style="font-size: 0.7rem; font-weight: 600;">Approval</div>
                            </div>
                            <div style="text-align: center; z-index: 1;">
                                <div style="width: 30px; height: 30px; background: #e2e8f0; color: #64748b; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 0.5rem;">5</div>
                                <div style="font-size: 0.7rem;">Payment</div>
                            </div>
                        </div>

                        <div style="display: flex; gap: 1rem;">
                            <button class="mockup-submit" style="flex: 1; background: #22c55e;">✅ Approve Payroll</button>
                            <button class="mockup-submit" style="flex: 1; background: #ef4444;">❌ Reject</button>
                        </div>
                    </div>
                </div>

                <!-- Import Data -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #a855f7 0%, #7c3aed 100%);">
                        <span class="mockup-title">📥 Import Data Karyawan</span>
                    </div>
                    <div class="mockup-content">
                        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 1rem;">
                            <div style="background: #f8fafc; border: 2px dashed #cbd5e1; padding: 1.25rem; border-radius: 12px; text-align: center; cursor: pointer;">
                                <div style="font-size: 2rem; margin-bottom: 0.5rem;">👤</div>
                                <div style="font-weight: 600; font-size: 0.9rem;">Master Karyawan</div>
                                <div style="font-size: 0.75rem; color: #64748b;">NIK, Nama, Jabatan</div>
                            </div>
                            <div style="background: #f8fafc; border: 2px dashed #cbd5e1; padding: 1.25rem; border-radius: 12px; text-align: center; cursor: pointer;">
                                <div style="font-size: 2rem; margin-bottom: 0.5rem;">💰</div>
                                <div style="font-weight: 600; font-size: 0.9rem;">Histori Gaji</div>
                                <div style="font-size: 0.75rem; color: #64748b;">Data payroll lama</div>
                            </div>
                            <div style="background: #f8fafc; border: 2px dashed #cbd5e1; padding: 1.25rem; border-radius: 12px; text-align: center; cursor: pointer;">
                                <div style="font-size: 2rem; margin-bottom: 0.5rem;">🏖️</div>
                                <div style="font-weight: 600; font-size: 0.9rem;">Saldo Cuti</div>
                                <div style="font-size: 0.75rem; color: #64748b;">Carrying balance</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Daftar Karyawan -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header">
                        <span class="mockup-title">📋 Daftar Karyawan</span>
                        <div class="mockup-actions">
                            <button class="mockup-btn">+ Tambah</button>
                            <button class="mockup-btn">📥 Export</button>
                        </div>
                    </div>
                    <div class="mockup-content" style="padding: 0;">
                        <table class="mockup-table">
                            <thead>
                                <tr>
                                    <th>NIK</th>
                                    <th>Nama</th>
                                    <th>Jabatan</th>
                                    <th>Unit</th>
                                    <th>Status</th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style="font-weight: 500; font-family: monospace;">EMP-2024-0045</td>
                                    <td>Budi Santoso</td>
                                    <td>Staff Keuangan</td>
                                    <td>Unit Keuangan</td>
                                    <td><span class="mockup-status approved">Aktif</span></td>
                                    <td><button style="background: #3b82f6; color: white; border: none; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.7rem; cursor: pointer;">Detail</button></td>
                                </tr>
                                <tr>
                                    <td style="font-weight: 500; font-family: monospace;">EMP-2023-0012</td>
                                    <td>Siti Aminah</td>
                                    <td>Manajer HC</td>
                                    <td>Unit SDM</td>
                                    <td><span class="mockup-status approved">Aktif</span></td>
                                    <td><button style="background: #3b82f6; color: white; border: none; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.7rem; cursor: pointer;">Detail</button></td>
                                </tr>
                                <tr style="background: #fefce8;">
                                    <td style="font-weight: 500; font-family: monospace;">EMP-2022-0008</td>
                                    <td>Ahmad Ridwan</td>
                                    <td>Driver</td>
                                    <td>Unit Transportasi</td>
                                    <td><span class="mockup-status pending">Cuti</span></td>
                                    <td><button style="background: #3b82f6; color: white; border: none; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.7rem; cursor: pointer;">Detail</button></td>
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
window.ppsuModules.push(modul_human_capital);
