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
                         <strong>5. Cuti:</strong> Jumlah tidak akurat`
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
                         <strong>5. Cuti:</strong> Jenis cuti, jumlah, approval workflow<br>
                         <strong>6. Penilaian:</strong> KPI, score kinerja`
            },
            {
                icon: '📥',
                iconBg: 'rgba(139, 92, 246, 0.1)',
                iconColor: '#8b5cf6',
                title: 'Import Data dari Sistem Existing',
                content: `<strong>Data Import:</strong> Master karyawan, histori gaji, jumlah cuti, BPJS<br>
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
            },
            {
                icon: '🎯',
                iconBg: 'rgba(236, 72, 153, 0.1)',
                iconColor: '#ec4899',
                title: 'KPI & Penilaian Karyawan',
                content: `<strong>🎯 KPI:</strong> Target individual, pencapaian, bobot<br>
                         <strong>📊 Score:</strong> Perhitungan otomatis, visualisasi<br>
                         <strong>📅 Periode:</strong> Triwulan, semesteran, tahunan<br>
                         <strong>🔗 Link:</strong> Ke merit sistem & bonus`
            },
            {
                icon: '🎓',
                iconBg: 'rgba(34, 197, 94, 0.1)',
                iconColor: '#22c55e',
                title: 'Pengembangan SDM (Merit System)',
                content: `<strong>🎓 Training:</strong> Jadwal, peserta, evaluasi<br>
                         <strong>📜 Sertifikasi:</strong> Tracking masa berlaku, renewal<br>
                         <strong>📈 Career Path:</strong> Jalur karir, promosi<br>
                         <strong>🏆 Reward:</strong> Penghargaan, bonus kinerja`
            },
            {
                icon: '⚠️',
                iconBg: 'rgba(239, 68, 68, 0.1)',
                iconColor: '#ef4444',
                title: 'Monitoring Disiplin & Sanksi',
                content: `<strong>📝 Pelanggaran:</strong> Kategori, tingkat, bukti<br>
                         <strong>⚠️ Sanksi:</strong> SP1, SP2, SP3, PHK<br>
                         <strong>📅 Timeline:</strong> Riwayat pembinaan<br>
                         <strong>🔗 Integrasi:</strong> Link ke KPI & kontrak`
            }
        ]
    },

    // ============================================
    // MERMAID DIAGRAM
    // ============================================
    diagram: {
        title: 'Diagram Alur - Sistem Human Capital',
        mermaid: `flowchart LR

%% ===================== DATA INDUK PEGAWAI =====================
subgraph DATA["👤 DATA INDUK PEGAWAI"]
    direction TB
    D1[Input<br>Biodata] --> D2[Kontrak<br>PKWT/PKWTT]
    D2 --> D3{Masa Berlaku?}
    D3 -->|Active| D4[📋 Master<br>Karyawan]
    D3 -->|Expired| D5[⚠️ Reminder<br>Perpanjang]
end

%% ===================== PRESENSI & CUTI =====================
subgraph KEHADIRAN["📅 PRESENSI & CUTI"]
    direction TB
    K1[Clock In/<br>Out] --> K2[Rekap<br>Kehadiran]
    K2 --> K3[Hitung<br>Lembur]

    K4[Ajukan<br>Cuti] --> K5{Saldo<br>Cukup?}
    K5 -->|Ya| K6[Approval<br>Atasan]
    K5 -->|Tidak| K7[❌ Reject]
    K6 --> K8[Deduct<br>Saldo]
end

%% ===================== PAYROLL =====================
subgraph PAYROLL["💰 PAYROLL & PPh 21"]
    direction TB
    P1[Gaji Pokok +<br>Tunjangan] --> P2[- Potongan<br>BPJS/Pinjaman]
    P2 --> P3[Hitung<br>PPh 21]
    P3 --> P4[Generate<br>Slip Gaji]
    P4 --> P5{Approval}
    P5 -->|OK| P6[Jurnal ke<br>Keuangan]
end

%% ===================== KPI =====================
subgraph KPI["🎯 KPI KARYAWAN"]
    direction TB
    I1[Set Target<br>& Bobot] --> I2[Input<br>Realisasi]
    I2 --> I3[Hitung<br>Score]
    I3 --> I4[Dashboard<br>Kinerja]
end

%% ===================== MERIT SYSTEM =====================
subgraph MERIT["🎓 MERIT SYSTEM"]
    direction TB
    M1[📚 Training<br>Plan] --> M2[Pelaksanaan<br>& Evaluasi]
    M2 --> M3[📜 Sertifikasi]
    M3 --> M4{Expired?}
    M4 -->|Ya| M5[⚠️ Reminder<br>Renewal]
    M4 -->|Tidak| M6[✅ Active]

    I4 --> M7[🏆 Reward<br>& Promosi]
end

%% ===================== DISIPLIN =====================
subgraph DISIPLIN["⚠️ DISIPLIN & SANKSI"]
    direction TB
    S1[📝 Catat<br>Pelanggaran] --> S2{Tingkat?}
    S2 -->|Ringan| S3[Teguran]
    S2 -->|Sedang| S4[SP1]
    S2 -->|Berat| S5[SP2/SP3]
    S2 -->|Sangat Berat| S6[PHK]
    S4 --> S7[Timeline<br>Pembinaan]
    S5 --> S7
end

%% ===================== NODE EKSTERNAL =====================
KEU[(💰 MODUL<br>KEUANGAN)]

%% ===================== RELASI ANTAR MODUL =====================
D4 --> K1
D4 --> P1
K2 --> P1
K3 --> P1
P6 --> KEU

S7 --> I4

%% ===================== STYLING =====================
style DATA fill:#dbeafe,stroke:#3b82f6,color:#1e3a5f
style KEHADIRAN fill:#dcfce7,stroke:#22c55e,color:#166534
style PAYROLL fill:#fef3c7,stroke:#f59e0b,color:#78350f
style KPI fill:#fce7f3,stroke:#ec4899,color:#831843
style MERIT fill:#f0fdf4,stroke:#22c55e,color:#166534
style DISIPLIN fill:#fef2f2,stroke:#ef4444,color:#7f1d1d
style KEU fill:#e0e7ff,stroke:#6366f1,color:#3730a3`
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
                                <div style="font-weight: 600; font-size: 0.9rem;">Jumlah Cuti</div>
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

                <!-- Employee Profile -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);">
                        <span class="mockup-title">👤 Profil Karyawan</span>
                        <div class="mockup-actions">
                            <button class="mockup-btn" style="background: white; color: #0284c7;">✏️ Edit</button>
                        </div>
                    </div>
                    <div class="mockup-content">
                        <!-- Header Profile -->
                        <div style="display: flex; gap: 1.5rem; margin-bottom: 1.5rem;">
                            <div style="width: 100px; height: 100px; background: linear-gradient(135deg, #3b82f6, #1d4ed8); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2.5rem; color: white;">BS</div>
                            <div style="flex: 1;">
                                <div style="font-size: 1.25rem; font-weight: 700;">Budi Santoso</div>
                                <div style="color: #64748b; margin-bottom: 0.5rem;">Staff Keuangan - Unit Keuangan</div>
                                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                                    <span style="background: #dcfce7; color: #166534; padding: 0.25rem 0.75rem; border-radius: 4px; font-size: 0.75rem;">✅ Aktif</span>
                                    <span style="background: #dbeafe; color: #1d4ed8; padding: 0.25rem 0.75rem; border-radius: 4px; font-size: 0.75rem;">💼 Tetap</span>
                                    <span style="background: #fef3c7; color: #92400e; padding: 0.25rem 0.75rem; border-radius: 4px; font-size: 0.75rem;">🎯 KPI: 92%</span>
                                </div>
                            </div>
                        </div>

                        <!-- Tabs -->
                        <div style="display: flex; gap: 0.5rem; margin-bottom: 1rem; border-bottom: 2px solid #e2e8f0; padding-bottom: 0.5rem;">
                            <button style="background: #3b82f6; color: white; border: none; padding: 0.5rem 1rem; border-radius: 6px; font-size: 0.8rem; cursor: pointer;">Data Pribadi</button>
                            <button style="background: #f1f5f9; color: #64748b; border: none; padding: 0.5rem 1rem; border-radius: 6px; font-size: 0.8rem; cursor: pointer;">Kontrak</button>
                            <button style="background: #f1f5f9; color: #64748b; border: none; padding: 0.5rem 1rem; border-radius: 6px; font-size: 0.8rem; cursor: pointer;">Kehadiran</button>
                            <button style="background: #f1f5f9; color: #64748b; border: none; padding: 0.5rem 1rem; border-radius: 6px; font-size: 0.8rem; cursor: pointer;">KPI</button>
                            <button style="background: #f1f5f9; color: #64748b; border: none; padding: 0.5rem 1rem; border-radius: 6px; font-size: 0.8rem; cursor: pointer;">Training</button>
                        </div>

                        <!-- Personal Data -->
                        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; font-size: 0.85rem;">
                            <div style="background: #f8fafc; padding: 1rem; border-radius: 8px;">
                                <div style="font-weight: 600; margin-bottom: 0.75rem;">💼 Informasi Kepegawaian</div>
                                <div style="display: grid; gap: 0.5rem;">
                                    <div><span style="color: #64748b;">NIK:</span> EMP-2024-0045</div>
                                    <div><span style="color: #64748b;">Tanggal Masuk:</span> 15 Maret 2024</div>
                                    <div><span style="color: #64748b;">Masa Kerja:</span> 1 Tahun 10 Bulan</div>
                                    <div><span style="color: #64748b;">Grade:</span> G4 - Staff Senior</div>
                                </div>
                            </div>
                            <div style="background: #f8fafc; padding: 1rem; border-radius: 8px;">
                                <div style="font-weight: 600; margin-bottom: 0.75rem;">👤 Data Pribadi</div>
                                <div style="display: grid; gap: 0.5rem;">
                                    <div><span style="color: #64748b;">NIK KTP:</span> 1271xxxxxxxxxxxx</div>
                                    <div><span style="color: #64748b;">NPWP:</span> 12.345.678.9-123.000</div>
                                    <div><span style="color: #64748b;">Status:</span> Kawin / 1 Anak</div>
                                    <div><span style="color: #64748b;">Pendidikan:</span> S1 Akuntansi</div>
                                </div>
                            </div>
                        </div>

                        <!-- Contract Info -->
                        <div style="background: #eff6ff; border: 1px solid #3b82f6; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <div>
                                    <div style="font-weight: 600;">📝 Kontrak Kerja Aktif</div>
                                    <div style="font-size: 0.85rem; color: #64748b;">PKWTT (Karyawan Tetap) | Berlaku sejak: 15 Maret 2025</div>
                                </div>
                                <button style="background: #3b82f6; color: white; border: none; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer; font-size: 0.8rem;">📄 Lihat Kontrak</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Attendance Log -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);">
                        <span class="mockup-title">📋 Presensi & Kehadiran</span>
                        <span style="background: rgba(255,255,255,0.2); padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">Januari 2026</span>
                    </div>
                    <div class="mockup-content">
                        <!-- Attendance Summary -->
                        <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 0.75rem; margin-bottom: 1rem;">
                            <div style="background: #dcfce7; padding: 0.75rem; border-radius: 8px; text-align: center;">
                                <div style="font-size: 1.25rem; font-weight: 700; color: #166534;">18</div>
                                <div style="font-size: 0.7rem; color: #166534;">Hadir</div>
                            </div>
                            <div style="background: #fef3c7; padding: 0.75rem; border-radius: 8px; text-align: center;">
                                <div style="font-size: 1.25rem; font-weight: 700; color: #92400e;">2</div>
                                <div style="font-size: 0.7rem; color: #92400e;">Terlambat</div>
                            </div>
                            <div style="background: #dbeafe; padding: 0.75rem; border-radius: 8px; text-align: center;">
                                <div style="font-size: 1.25rem; font-weight: 700; color: #1d4ed8;">1</div>
                                <div style="font-size: 0.7rem; color: #1d4ed8;">Izin</div>
                            </div>
                            <div style="background: #f3e8ff; padding: 0.75rem; border-radius: 8px; text-align: center;">
                                <div style="font-size: 1.25rem; font-weight: 700; color: #7c3aed;">0</div>
                                <div style="font-size: 0.7rem; color: #7c3aed;">Sakit</div>
                            </div>
                            <div style="background: #fecaca; padding: 0.75rem; border-radius: 8px; text-align: center;">
                                <div style="font-size: 1.25rem; font-weight: 700; color: #991b1b;">0</div>
                                <div style="font-size: 0.7rem; color: #991b1b;">Alpha</div>
                            </div>
                        </div>

                        <!-- Attendance Log -->
                        <table class="mockup-table" style="font-size: 0.8rem;">
                            <thead>
                                <tr>
                                    <th>Tanggal</th>
                                    <th>Clock In</th>
                                    <th>Clock Out</th>
                                    <th>Durasi</th>
                                    <th>Lembur</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>19 Jan 2026</td>
                                    <td style="color: #22c55e;">07:55</td>
                                    <td>17:05</td>
                                    <td>9j 10m</td>
                                    <td>1j 10m</td>
                                    <td><span style="background: #22c55e; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.65rem;">✅ Hadir</span></td>
                                </tr>
                                <tr style="background: #fefce8;">
                                    <td>18 Jan 2026</td>
                                    <td style="color: #f59e0b;">08:15</td>
                                    <td>17:00</td>
                                    <td>8j 45m</td>
                                    <td>-</td>
                                    <td><span style="background: #f59e0b; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.65rem;">⏰ Terlambat 15m</span></td>
                                </tr>
                                <tr>
                                    <td>17 Jan 2026</td>
                                    <td style="color: #22c55e;">07:50</td>
                                    <td>19:30</td>
                                    <td>11j 40m</td>
                                    <td>3j 40m</td>
                                    <td><span style="background: #22c55e; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.65rem;">✅ Hadir + Lembur</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Leave Management -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);">
                        <span class="mockup-title">🏖️ Cuti & Hak Lainnya</span>
                        <div class="mockup-actions">
                            <button class="mockup-btn" style="background: white; color: #d97706;">+ Ajukan Cuti</button>
                        </div>
                    </div>
                    <div class="mockup-content">
                        <!-- Leave Balance -->
                        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.75rem; margin-bottom: 1rem;">
                            <div style="background: #fef3c7; border: 2px solid #f59e0b; padding: 1rem; border-radius: 8px; text-align: center;">
                                <div style="font-size: 1.5rem; font-weight: 700; color: #92400e;">8</div>
                                <div style="font-size: 0.75rem; color: #92400e;">Cuti Tahunan</div>
                                <div style="font-size: 0.65rem; color: #64748b;">dari 12 hari</div>
                            </div>
                            <div style="background: #dbeafe; border: 2px solid #3b82f6; padding: 1rem; border-radius: 8px; text-align: center;">
                                <div style="font-size: 1.5rem; font-weight: 700; color: #1d4ed8;">3</div>
                                <div style="font-size: 0.75rem; color: #1d4ed8;">Cuti Sakit</div>
                                <div style="font-size: 0.65rem; color: #64748b;">digunakan</div>
                            </div>
                            <div style="background: #f3e8ff; border: 2px solid #8b5cf6; padding: 1rem; border-radius: 8px; text-align: center;">
                                <div style="font-size: 1.5rem; font-weight: 700; color: #7c3aed;">0</div>
                                <div style="font-size: 0.75rem; color: #7c3aed;">Cuti Besar</div>
                                <div style="font-size: 0.65rem; color: #64748b;">dari 30 hari (5 thn)</div>
                            </div>
                            <div style="background: #dcfce7; border: 2px solid #22c55e; padding: 1rem; border-radius: 8px; text-align: center;">
                                <div style="font-size: 1.5rem; font-weight: 700; color: #166534;">2</div>
                                <div style="font-size: 0.75rem; color: #166534;">Carry Forward</div>
                                <div style="font-size: 0.65rem; color: #64748b;">dari 2025</div>
                            </div>
                        </div>

                        <!-- Leave History -->
                        <div style="font-weight: 600; margin-bottom: 0.5rem;">📅 Riwayat Cuti</div>
                        <table class="mockup-table" style="font-size: 0.8rem;">
                            <thead>
                                <tr>
                                    <th>Tanggal</th>
                                    <th>Jenis</th>
                                    <th>Durasi</th>
                                    <th>Keterangan</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>25-26 Des 2025</td>
                                    <td>Cuti Tahunan</td>
                                    <td>2 hari</td>
                                    <td>Libur Natal</td>
                                    <td><span style="background: #22c55e; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.65rem;">✅ Approved</span></td>
                                </tr>
                                <tr>
                                    <td>10 Nov 2025</td>
                                    <td>Cuti Sakit</td>
                                    <td>1 hari</td>
                                    <td>Demam (Surat Dokter)</td>
                                    <td><span style="background: #22c55e; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.65rem;">✅ Approved</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- KPI Dashboard -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #ec4899 0%, #be185d 100%);">
                        <span class="mockup-title">🎯 KPI Karyawan</span>
                        <span style="background: rgba(255,255,255,0.2); padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">Q4 2025</span>
                    </div>
                    <div class="mockup-content">
                        <!-- Overall Score -->
                        <div style="background: linear-gradient(135deg, #fce7f3, #fbcfe8); padding: 1.5rem; border-radius: 12px; margin-bottom: 1rem; display: flex; justify-content: space-between; align-items: center;">
                            <div>
                                <div style="font-size: 0.85rem; color: #be185d;">Total KPI Score</div>
                                <div style="font-size: 2.5rem; font-weight: 700; color: #be185d;">92%</div>
                                <div style="color: #22c55e; font-size: 0.8rem;">↑ +5% dari Q3</div>
                            </div>
                            <div style="text-align: right;">
                                <div style="background: #22c55e; color: white; padding: 0.5rem 1rem; border-radius: 8px; font-weight: 600;">🏆 EXCELLENT</div>
                                <div style="font-size: 0.75rem; color: #64748b; margin-top: 0.5rem;">Peringkat: 5 dari 156</div>
                            </div>
                        </div>

                        <!-- KPI Items -->
                        <div style="font-weight: 600; margin-bottom: 0.75rem;">📊 Detail KPI</div>
                        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                            <div style="background: #f8fafc; padding: 1rem; border-radius: 8px;">
                                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                                    <span style="font-weight: 500;">Akurasi Laporan Keuangan</span>
                                    <span style="font-weight: 600; color: #22c55e;">95%</span>
                                </div>
                                <div style="display: flex; align-items: center; gap: 0.5rem;">
                                    <div style="flex: 1; background: #e2e8f0; border-radius: 4px; height: 8px;">
                                        <div style="width: 95%; background: #22c55e; height: 100%; border-radius: 4px;"></div>
                                    </div>
                                    <span style="font-size: 0.7rem; color: #64748b;">Target: 90%</span>
                                </div>
                            </div>
                            <div style="background: #f8fafc; padding: 1rem; border-radius: 8px;">
                                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                                    <span style="font-weight: 500;">Ketepatan Waktu Closing</span>
                                    <span style="font-weight: 600; color: #22c55e;">100%</span>
                                </div>
                                <div style="display: flex; align-items: center; gap: 0.5rem;">
                                    <div style="flex: 1; background: #e2e8f0; border-radius: 4px; height: 8px;">
                                        <div style="width: 100%; background: #22c55e; height: 100%; border-radius: 4px;"></div>
                                    </div>
                                    <span style="font-size: 0.7rem; color: #64748b;">Target: 100%</span>
                                </div>
                            </div>
                            <div style="background: #fef3c7; padding: 1rem; border-radius: 8px;">
                                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                                    <span style="font-weight: 500;">Training Completion</span>
                                    <span style="font-weight: 600; color: #f59e0b;">75%</span>
                                </div>
                                <div style="display: flex; align-items: center; gap: 0.5rem;">
                                    <div style="flex: 1; background: #e2e8f0; border-radius: 4px; height: 8px;">
                                        <div style="width: 75%; background: #f59e0b; height: 100%; border-radius: 4px;"></div>
                                    </div>
                                    <span style="font-size: 0.7rem; color: #64748b;">Target: 100%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Training & Certification -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);">
                        <span class="mockup-title">🎓 Training & Sertifikasi</span>
                        <div class="mockup-actions">
                            <button class="mockup-btn" style="background: white; color: #4f46e5;">+ Daftarkan</button>
                        </div>
                    </div>
                    <div class="mockup-content">
                        <!-- Certifications -->
                        <div style="font-weight: 600; margin-bottom: 0.75rem;">📜 Sertifikasi Aktif</div>
                        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.75rem; margin-bottom: 1rem;">
                            <div style="background: #dcfce7; border: 1px solid #22c55e; padding: 1rem; border-radius: 8px;">
                                <div style="font-weight: 600;">Brevet A & B</div>
                                <div style="font-size: 0.8rem; color: #64748b;">IAI - Ikatan Akuntan Indonesia</div>
                                <div style="display: flex; justify-content: space-between; margin-top: 0.5rem; font-size: 0.75rem;">
                                    <span>✅ Aktif</span>
                                    <span>Exp: Des 2027</span>
                                </div>
                            </div>
                            <div style="background: #fef3c7; border: 1px solid #f59e0b; padding: 1rem; border-radius: 8px;">
                                <div style="font-weight: 600;">SAP Finance</div>
                                <div style="font-size: 0.8rem; color: #64748b;">SAP Certified</div>
                                <div style="display: flex; justify-content: space-between; margin-top: 0.5rem; font-size: 0.75rem;">
                                    <span>⚠️ Perlu Renewal</span>
                                    <span style="color: #f59e0b; font-weight: 600;">Exp: Mar 2026</span>
                                </div>
                            </div>
                        </div>

                        <!-- Training History -->
                        <div style="font-weight: 600; margin-bottom: 0.5rem;">📚 Riwayat Training</div>
                        <table class="mockup-table" style="font-size: 0.8rem;">
                            <thead>
                                <tr>
                                    <th>Training</th>
                                    <th>Penyelenggara</th>
                                    <th>Tanggal</th>
                                    <th>Durasi</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>PSAK Update 2026</td>
                                    <td>IAI</td>
                                    <td>15-16 Jan 2026</td>
                                    <td>16 jam</td>
                                    <td><span style="background: #22c55e; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.65rem;">✅ Selesai</span></td>
                                </tr>
                                <tr style="background: #eff6ff;">
                                    <td>Leadership for Supervisor</td>
                                    <td>Internal</td>
                                    <td>25-26 Feb 2026</td>
                                    <td>16 jam</td>
                                    <td><span style="background: #3b82f6; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.65rem;">📅 Terdaftar</span></td>
                                </tr>
                            </tbody>
                        </table>

                        <!-- Career Path -->
                        <div style="background: #f8fafc; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
                            <div style="font-weight: 600; margin-bottom: 0.5rem;">📈 Career Path & Merit</div>
                            <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.85rem;">
                                <span style="background: #e2e8f0; padding: 0.25rem 0.75rem; border-radius: 4px;">G4 Staff Senior</span>
                                <span>→</span>
                                <span style="background: #dbeafe; padding: 0.25rem 0.75rem; border-radius: 4px; border: 2px dashed #3b82f6;">G5 Supervisor</span>
                                <span>→</span>
                                <span style="background: #f1f5f9; padding: 0.25rem 0.75rem; border-radius: 4px; color: #94a3b8;">G6 Manajer</span>
                            </div>
                            <div style="font-size: 0.75rem; color: #64748b; margin-top: 0.5rem;">💡 Kualifikasi promosi: KPI > 90%, Training complete, Masa kerja > 2 thn</div>
                        </div>
                    </div>
                </div>

                <!-- Discipline Monitoring -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);">
                        <span class="mockup-title">⚠️ Monitoring Disiplin & Sanksi</span>
                    </div>
                    <div class="mockup-content">
                        <!-- Discipline Status -->
                        <div style="background: #dcfce7; border: 2px solid #22c55e; padding: 1rem; border-radius: 8px; margin-bottom: 1rem; display: flex; align-items: center; gap: 1rem;">
                            <div style="font-size: 2rem;">✅</div>
                            <div>
                                <div style="font-weight: 600; color: #166534;">Status Disiplin: BAIK</div>
                                <div style="font-size: 0.85rem; color: #64748b;">Tidak ada pelanggaran aktif dalam 12 bulan terakhir</div>
                            </div>
                        </div>

                        <!-- Discipline Categories -->
                        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.5rem; margin-bottom: 1rem; font-size: 0.8rem;">
                            <div style="background: #f8fafc; padding: 0.75rem; border-radius: 8px; text-align: center;">
                                <div style="font-weight: 700; color: #22c55e;">0</div>
                                <div style="color: #64748b;">Teguran</div>
                            </div>
                            <div style="background: #f8fafc; padding: 0.75rem; border-radius: 8px; text-align: center;">
                                <div style="font-weight: 700; color: #22c55e;">0</div>
                                <div style="color: #64748b;">SP1</div>
                            </div>
                            <div style="background: #f8fafc; padding: 0.75rem; border-radius: 8px; text-align: center;">
                                <div style="font-weight: 700; color: #22c55e;">0</div>
                                <div style="color: #64748b;">SP2</div>
                            </div>
                            <div style="background: #f8fafc; padding: 0.75rem; border-radius: 8px; text-align: center;">
                                <div style="font-weight: 700; color: #22c55e;">0</div>
                                <div style="color: #64748b;">SP3</div>
                            </div>
                        </div>

                        <!-- Sample Violation Entry (for other employee) -->
                        <div style="background: #fef2f2; border: 1px solid #fecaca; padding: 1rem; border-radius: 8px;">
                            <div style="font-weight: 600; margin-bottom: 0.5rem;">📝 Contoh Entry Pelanggaran (Karyawan Lain)</div>
                            <div style="display: grid; grid-template-columns: 100px 1fr; gap: 0.5rem; font-size: 0.85rem;">
                                <div style="color: #64748b;">Tanggal:</div>
                                <div>15 November 2025</div>
                                <div style="color: #64748b;">Kategori:</div>
                                <div>Keterlambatan berulang (> 5x/bulan)</div>
                                <div style="color: #64748b;">Sanksi:</div>
                                <div><span style="background: #f59e0b; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">SP1 - Surat Peringatan Pertama</span></div>
                                <div style="color: #64748b;">Masa Berlaku:</div>
                                <div>15 Nov 2025 - 15 Mei 2026 (6 bulan)</div>
                                <div style="color: #64748b;">Tindak Lanjut:</div>
                                <div>Pembinaan oleh atasan langsung, monitoring kehadiran</div>
                            </div>
                        </div>

                        <!-- Discipline Flow -->
                        <div style="margin-top: 1rem; font-size: 0.8rem;">
                            <div style="font-weight: 600; margin-bottom: 0.5rem;">📈 Alur Pembinaan Disiplin</div>
                            <div style="display: flex; justify-content: space-between; background: #f8fafc; padding: 1rem; border-radius: 8px;">
                                <div style="text-align: center;">
                                    <div style="background: #fef3c7; padding: 0.5rem; border-radius: 6px; margin-bottom: 0.25rem;">📝</div>
                                    <div>Teguran Lisan</div>
                                </div>
                                <div style="display: flex; align-items: center;">→</div>
                                <div style="text-align: center;">
                                    <div style="background: #fed7aa; padding: 0.5rem; border-radius: 6px; margin-bottom: 0.25rem;">⚠️</div>
                                    <div>SP1</div>
                                </div>
                                <div style="display: flex; align-items: center;">→</div>
                                <div style="text-align: center;">
                                    <div style="background: #fecaca; padding: 0.5rem; border-radius: 6px; margin-bottom: 0.25rem;">⚠️</div>
                                    <div>SP2</div>
                                </div>
                                <div style="display: flex; align-items: center;">→</div>
                                <div style="text-align: center;">
                                    <div style="background: #ef4444; color: white; padding: 0.5rem; border-radius: 6px; margin-bottom: 0.25rem;">🚫</div>
                                    <div>SP3</div>
                                </div>
                                <div style="display: flex; align-items: center;">→</div>
                                <div style="text-align: center;">
                                    <div style="background: #1f2937; color: white; padding: 0.5rem; border-radius: 6px; margin-bottom: 0.25rem;">❌</div>
                                    <div>PHK</div>
                                </div>
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
window.ppsuModules.push(modul_human_capital);
