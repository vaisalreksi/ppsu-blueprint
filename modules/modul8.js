// ============================================
// MODUL 8 - SISTEM TEKNIK DAN PERENCANAAN
// PT Pembangunan Prasarana Sumatera Utara (Perseroda)
// ============================================

const modul_teknik = {
    id: 'modul_teknik',
    title: 'Modul 8 - Sistem Teknik dan Perencanaan',
    subtitle: 'CCTV Proyek, Progress Tracking, S-Curve, Penagihan Termin & Integrasi Keuangan',
    icon: '🏗️',
    menuTitle: 'Teknik & Perencanaan',

    // ============================================
    // HASIL ANALISA
    // ============================================
    analisa: {
        title: 'Hasil Analisa - Sistem Teknik dan Perencanaan',
        items: [
            {
                icon: '🎯',
                iconBg: 'rgba(37, 99, 235, 0.1)',
                iconColor: '#2563eb',
                title: 'Tujuan Modul',
                content: `Membangun sistem manajemen proyek terintegrasi dengan monitoring CCTV, 
                         tracking progress real-time dengan S-Curve, analisis actual vs plan,
                         dan sistem penagihan termin otomatis yang terintegrasi ke Keuangan.`
            },
            {
                icon: '🚨',
                iconBg: 'rgba(239, 68, 68, 0.1)',
                iconColor: '#ef4444',
                title: 'Kondisi Saat Ini (Masalah)',
                content: `<strong>1. Monitoring:</strong> Manual site visit, biaya tinggi<br>
                         <strong>2. Progress:</strong> Laporan manual, tidak real-time<br>
                         <strong>3. CCTV:</strong> Tidak ada, sulit pantau remote<br>
                         <strong>4. Actual vs Plan:</strong> Hitung manual Excel<br>
                         <strong>5. Penagihan:</strong> Manual, tidak terintegrasi`
            },
            {
                icon: '📹',
                iconBg: 'rgba(16, 185, 129, 0.1)',
                iconColor: '#10b981',
                title: 'CCTV Monitoring Proyek',
                content: `<strong>Live Feed:</strong> Pantau proyek dari kantor<br>
                         <strong>Multi-Camera:</strong> Grid view semua proyek<br>
                         <strong>Playback:</strong> Rekaman 30 hari<br>
                         <strong>Time-lapse:</strong> Compare foto progress<br>
                         <strong>Mobile:</strong> View dari mana saja`
            },
            {
                icon: '📈',
                iconBg: 'rgba(139, 92, 246, 0.1)',
                iconColor: '#8b5cf6',
                title: 'S-Curve & Variance Analysis',
                content: `🟢 <strong>On Track (SPI ≥ 1.0):</strong> Actual ≥ Plan<br>
                         🟡 <strong>Minor Delay (0.9-0.99):</strong> Sedikit terlambat<br>
                         🟠 <strong>At Risk (0.8-0.89):</strong> Perlu perhatian<br>
                         🔴 <strong>Critical (< 0.8):</strong> Proyek berisiko terlambat`
            },
            {
                icon: '💰',
                iconBg: 'rgba(245, 158, 11, 0.1)',
                iconColor: '#f59e0b',
                title: 'Sistem Penagihan Termin',
                content: `<strong>T1 (0-25%):</strong> 20% nilai - 5% retensi<br>
                         <strong>T2 (25-50%):</strong> 25% nilai - 5% retensi<br>
                         <strong>T3 (50-75%):</strong> 25% nilai - 5% retensi<br>
                         <strong>T4 (75-95%):</strong> 20% nilai - 5% retensi<br>
                         <strong>Final:</strong> 10% + release retensi`
            },
            {
                icon: '🔗',
                iconBg: 'rgba(6, 182, 212, 0.1)',
                iconColor: '#06b6d4',
                title: 'Integrasi Keuangan',
                content: `<strong>BAP Approved:</strong> → Create AR Invoice<br>
                         <strong>Pembayaran:</strong> → Jurnal Bank → Piutang<br>
                         <strong>Retensi:</strong> → Tracking & release otomatis<br>
                         <strong>Aging:</strong> → AR aging per proyek`
            },
            {
                icon: '💼',
                iconBg: 'rgba(236, 72, 153, 0.1)',
                iconColor: '#ec4899',
                title: 'Manajemen Project Lifecycle',
                content: `<strong>📄 Tender:</strong> Pengajuan, dokumen, evaluasi<br>
                         <strong>📊 RAB:</strong> Rencana Anggaran Biaya (penawaran)<br>
                         <strong>📝 RAP:</strong> Rencana Anggaran Pelaksanaan<br>
                         <strong>💰 Pelaksanaan:</strong> Progress, cost control<br>
                         <strong>🧾 Penagihan:</strong> Termin, BAP, invoice`
            },
            {
                icon: '📦',
                iconBg: 'rgba(34, 197, 94, 0.1)',
                iconColor: '#22c55e',
                title: 'PBJ Konstruksi (HPS & Tender)',
                content: `<strong>📊 HPS:</strong> Harga Perkiraan Sendiri<br>
                         <strong>📄 Dokumen:</strong> Spesifikasi teknis, gambar<br>
                         <strong>📩 Tender:</strong> Undangan, aanwijzing, evaluasi<br>
                         <strong>🏆 Penetapan:</strong> Pemenang, kontrak<br>
                         <strong>🔗 PL:</strong> Penunjukan Langsung (< threshold)`
            },
            {
                icon: '📓',
                iconBg: 'rgba(239, 68, 68, 0.1)',
                iconColor: '#ef4444',
                title: 'Log Konstruksi (Daily Log)',
                content: `<strong>📅 Harian:</strong> Catatan aktivitas operasional<br>
                         <strong>📦 Material:</strong> In/out, stock, pemakaian<br>
                         <strong>👷 Tenaga Kerja:</strong> Jumlah, skill, attendance<br>
                         <strong>🏗️ Progress:</strong> % fisik, foto dokumentasi<br>
                         <strong>⚠️ K3:</strong> Safety checklist, insiden, APD<br>
                         <strong>🚨 Risiko:</strong> Identifikasi, mitigasi, link ke Modul 9`
            }
        ]
    },

    // ============================================
    // MERMAID DIAGRAM
    // ============================================
    diagram: {
        title: 'Diagram Alur - Sistem Teknik dan Perencanaan',
        mermaid: `flowchart LR

%% ===================== PBJ KONSTRUKSI =====================
subgraph PBJ["📦 PBJ KONSTRUKSI"]
    direction TB
    J1[📊 Susun<br>HPS] --> J2{Nilai?}
    J2 -->|< 50jt| J3[PL<br>Langsung]
    J2 -->|≥ 50jt| J4[Proses<br>Tender]
    J4 --> J5[Undangan &<br>Aanwijzing]
    J5 --> J6[Evaluasi<br>Penawaran]
    J6 --> J7[🏆 Pemenang<br>& Kontrak]
    J3 --> J7
end

%% ===================== PROJECT LIFECYCLE =====================
subgraph PROJECT["💼 PROJECT LIFECYCLE"]
    direction TB
    P1[📄 RAB<br>Penawaran] --> P2[Kontrak]
    P2 --> P3[📋 RAP<br>Pelaksanaan]
    P3 --> P4[Eksekusi<br>Proyek]
    P4 --> P5[Progress<br>Tracking]
end

%% ===================== LOG KONSTRUKSI =====================
subgraph LOG["📓 LOG KONSTRUKSI"]
    direction TB
    L1[📅 Daily<br>Log] --> L2[📦 Material<br>In/Out]
    L1 --> L3[👷 Tenaga<br>Kerja]
    L1 --> L4[🏗️ Progress<br>Fisik]
    L1 --> L5[⚠️ K3<br>Checklist]
    L5 --> L6{Insiden?}
    L6 -->|Ya| L7[🚨 Link ke<br>Modul Risiko]
    L6 -->|Tidak| L8[✅ OK]
end

%% ===================== MONITORING =====================
subgraph MONITOR["📹 MONITORING"]
    direction TB
    M1[CCTV<br>Live] --> M2[Remote<br>View]

    M3[S-Curve<br>Analysis] --> M4{SPI<br>Check}
    M4 -->|≥ 1.0| M5[🟢 On Track]
    M4 -->|0.8–0.99| M6[🟡 Warning]
    M4 -->|< 0.8| M7[🔴 Critical]
end

%% ===================== BILLING =====================
subgraph BILLING["💰 PENAGIHAN"]
    direction TB
    B1[Milestone<br>Achieved] --> B2[Generate<br>BAP]
    B2 --> B3[Approval]
    B3 --> B4[Invoice<br>Termin]
    B4 --> B5[Post ke<br>Keuangan]
end

%% ===================== NODE EKSTERNAL =====================
KEU[(💰 MODUL<br>KEUANGAN)]
RSK[(⚠️ MODUL<br>RISIKO)]

%% ===================== RELASI ANTAR MODUL =====================
J7 --> P1
P5 --> L1
P5 --> M1
P5 --> M3
L4 --> M3

M5 --> B1
M6 --> B1

B5 --> KEU
L7 --> RSK

%% ===================== STYLING =====================
style PBJ fill:#dcfce7,stroke:#22c55e,color:#166534
style PROJECT fill:#dbeafe,stroke:#3b82f6,color:#1e3a5f
style LOG fill:#fef2f2,stroke:#ef4444,color:#7f1d1d
style MONITOR fill:#f3e8ff,stroke:#a855f7,color:#581c87
style BILLING fill:#fef3c7,stroke:#f59e0b,color:#78350f
style KEU fill:#fce7f3,stroke:#ec4899,color:#831843
style RSK fill:#fef3c7,stroke:#f59e0b,color:#78350f`
    },

    // ============================================
    // PROTOTYPE HTML
    // ============================================
    prototype: {
        title: 'Prototype UI - Sistem Teknik dan Perencanaan',
        html: `
            <div class="prototype-container">
                <div class="prototype-header">
                    <h3>📱 Preview Prototype UI</h3>
                </div>
                
                <!-- Dashboard Proyek -->
                <div class="prototype-mockup">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);">
                        <span class="mockup-title">🏗️ Dashboard Proyek</span>
                    </div>
                    <div class="mockup-content">
                        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
                            <div style="background: linear-gradient(135deg, #22c55e, #16a34a); color: white; padding: 1rem; border-radius: 12px; text-align: center;">
                                <div style="font-size: 0.7rem; opacity: 0.9; margin-bottom: 0.25rem;">Proyek Aktif</div>
                                <div style="font-size: 1.5rem; font-weight: 700;">8</div>
                                <div style="font-size: 0.65rem; opacity: 0.8;">Total Rp 125 M</div>
                            </div>
                            <div style="background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: white; padding: 1rem; border-radius: 12px; text-align: center;">
                                <div style="font-size: 0.7rem; opacity: 0.9; margin-bottom: 0.25rem;">On Track</div>
                                <div style="font-size: 1.5rem; font-weight: 700;">5</div>
                                <div style="font-size: 0.65rem; opacity: 0.8;">🟢 SPI ≥ 1.0</div>
                            </div>
                            <div style="background: linear-gradient(135deg, #f59e0b, #d97706); color: white; padding: 1rem; border-radius: 12px; text-align: center;">
                                <div style="font-size: 0.7rem; opacity: 0.9; margin-bottom: 0.25rem;">At Risk</div>
                                <div style="font-size: 1.5rem; font-weight: 700;">2</div>
                                <div style="font-size: 0.65rem; opacity: 0.8;">🟡 Perlu perhatian</div>
                            </div>
                            <div style="background: linear-gradient(135deg, #ef4444, #dc2626); color: white; padding: 1rem; border-radius: 12px; text-align: center;">
                                <div style="font-size: 0.7rem; opacity: 0.9; margin-bottom: 0.25rem;">Critical</div>
                                <div style="font-size: 1.5rem; font-weight: 700;">1</div>
                                <div style="font-size: 0.65rem; opacity: 0.8;">🔴 SPI < 0.8</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- CCTV Grid -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);">
                        <span class="mockup-title">📹 CCTV Monitoring Proyek</span>
                        <div class="mockup-actions">
                            <button class="mockup-btn" style="background: white; color: #16a34a;">📺 Fullscreen</button>
                        </div>
                    </div>
                    <div class="mockup-content">
                        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem;">
                            <!-- Camera 1 -->
                            <div style="background: #1e293b; border-radius: 8px; overflow: hidden;">
                                <div style="aspect-ratio: 16/9; background: linear-gradient(45deg, #334155 25%, #475569 50%, #334155 75%); display: flex; align-items: center; justify-content: center; position: relative;">
                                    <div style="color: white; font-size: 2rem;">📹</div>
                                    <div style="position: absolute; top: 0.5rem; left: 0.5rem; background: #ef4444; color: white; padding: 0.125rem 0.375rem; border-radius: 4px; font-size: 0.6rem; animation: blink 1s infinite;">● LIVE</div>
                                    <div style="position: absolute; bottom: 0.5rem; left: 0.5rem; color: white; font-size: 0.65rem; text-shadow: 0 1px 2px rgba(0,0,0,0.8);">2026-01-18 03:20:15</div>
                                </div>
                                <div style="padding: 0.5rem; color: white; font-size: 0.75rem;">
                                    <strong>Jembatan Sei Deli</strong> - CAM-01
                                </div>
                            </div>
                            <!-- Camera 2 -->
                            <div style="background: #1e293b; border-radius: 8px; overflow: hidden;">
                                <div style="aspect-ratio: 16/9; background: linear-gradient(45deg, #334155 25%, #475569 50%, #334155 75%); display: flex; align-items: center; justify-content: center; position: relative;">
                                    <div style="color: white; font-size: 2rem;">📹</div>
                                    <div style="position: absolute; top: 0.5rem; left: 0.5rem; background: #ef4444; color: white; padding: 0.125rem 0.375rem; border-radius: 4px; font-size: 0.6rem; animation: blink 1s infinite;">● LIVE</div>
                                </div>
                                <div style="padding: 0.5rem; color: white; font-size: 0.75rem;">
                                    <strong>Dermaga Pelabuhan</strong> - CAM-02
                                </div>
                            </div>
                            <!-- Camera 3 -->
                            <div style="background: #1e293b; border-radius: 8px; overflow: hidden;">
                                <div style="aspect-ratio: 16/9; background: linear-gradient(45deg, #334155 25%, #475569 50%, #334155 75%); display: flex; align-items: center; justify-content: center; position: relative;">
                                    <div style="color: white; font-size: 2rem;">📹</div>
                                    <div style="position: absolute; top: 0.5rem; left: 0.5rem; background: #ef4444; color: white; padding: 0.125rem 0.375rem; border-radius: 4px; font-size: 0.6rem; animation: blink 1s infinite;">● LIVE</div>
                                </div>
                                <div style="padding: 0.5rem; color: white; font-size: 0.75rem;">
                                    <strong>Gedung PRSU</strong> - CAM-03
                                </div>
                            </div>
                        </div>
                        <style>
                            @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
                        </style>
                    </div>
                </div>

                <!-- S-Curve Chart -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);">
                        <span class="mockup-title">📈 S-Curve: Jembatan Sei Deli</span>
                    </div>
                    <div class="mockup-content">
                        <!-- S-Curve Visual -->
                        <div style="background: #f8fafc; padding: 1rem; border-radius: 8px; position: relative; height: 200px;">
                            <!-- Y-Axis Labels -->
                            <div style="position: absolute; left: 0; top: 0; bottom: 20px; width: 40px; display: flex; flex-direction: column; justify-content: space-between; font-size: 0.65rem; color: #64748b;">
                                <span>100%</span>
                                <span>75%</span>
                                <span>50%</span>
                                <span>25%</span>
                                <span>0%</span>
                            </div>
                            <!-- Chart Area -->
                            <div style="position: absolute; left: 50px; right: 10px; top: 10px; bottom: 30px; border-left: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0;">
                                <!-- Baseline Plan (dashed) -->
                                <svg style="position: absolute; inset: 0; width: 100%; height: 100%;">
                                    <polyline points="0,160 50,140 100,100 150,60 200,30 250,10 300,5" 
                                              style="fill: none; stroke: #94a3b8; stroke-width: 2; stroke-dasharray: 5,5;"/>
                                    <polyline points="0,160 50,145 100,110 150,75 200,55" 
                                              style="fill: none; stroke: #3b82f6; stroke-width: 3;"/>
                                </svg>
                                <!-- Current Point -->
                                <div style="position: absolute; left: 65%; top: 35%; width: 12px; height: 12px; background: #3b82f6; border: 2px solid white; border-radius: 50%; box-shadow: 0 2px 4px rgba(0,0,0,0.2);"></div>
                            </div>
                            <!-- X-Axis Labels -->
                            <div style="position: absolute; left: 50px; right: 10px; bottom: 5px; display: flex; justify-content: space-between; font-size: 0.65rem; color: #64748b;">
                                <span>M1</span>
                                <span>M2</span>
                                <span>M3</span>
                                <span>M4</span>
                                <span>M5</span>
                                <span>M6</span>
                            </div>
                        </div>

                        <!-- Legend & Stats -->
                        <div style="display: flex; justify-content: space-between; margin-top: 1rem; padding: 0.75rem; background: #f1f5f9; border-radius: 8px;">
                            <div style="display: flex; gap: 1.5rem; font-size: 0.8rem;">
                                <div style="display: flex; align-items: center; gap: 0.5rem;">
                                    <div style="width: 24px; height: 2px; background: #94a3b8; border-style: dashed;"></div>
                                    <span>Baseline Plan</span>
                                </div>
                                <div style="display: flex; align-items: center; gap: 0.5rem;">
                                    <div style="width: 24px; height: 3px; background: #3b82f6;"></div>
                                    <span>Actual Progress</span>
                                </div>
                            </div>
                            <div style="display: flex; gap: 1.5rem; font-size: 0.8rem; font-weight: 600;">
                                <div>Plan: <span style="color: #64748b;">68%</span></div>
                                <div>Actual: <span style="color: #3b82f6;">65%</span></div>
                                <div>SPI: <span style="color: #f59e0b;">0.96</span> 🟡</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Progress Billing -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);">
                        <span class="mockup-title">💰 Penagihan Termin - Jembatan Sei Deli</span>
                    </div>
                    <div class="mockup-content">
                        <div style="background: #f8fafc; padding: 0.75rem; border-radius: 8px; margin-bottom: 1rem; font-size: 0.85rem;">
                            <strong>Nilai Kontrak:</strong> Rp 45.000.000.000 | <strong>Progress:</strong> 65% | <strong>Tertagih:</strong> Rp 26.1 M (58%)
                        </div>

                        <!-- Termin Progress -->
                        <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 0.5rem; margin-bottom: 1rem;">
                            <div style="background: #22c55e; color: white; padding: 0.75rem; border-radius: 8px; text-align: center;">
                                <div style="font-size: 0.7rem; opacity: 0.9;">Termin 1</div>
                                <div style="font-weight: 600;">20%</div>
                                <div style="font-size: 0.65rem;">✅ Paid</div>
                            </div>
                            <div style="background: #22c55e; color: white; padding: 0.75rem; border-radius: 8px; text-align: center;">
                                <div style="font-size: 0.7rem; opacity: 0.9;">Termin 2</div>
                                <div style="font-weight: 600;">25%</div>
                                <div style="font-size: 0.65rem;">✅ Paid</div>
                            </div>
                            <div style="background: #3b82f6; color: white; padding: 0.75rem; border-radius: 8px; text-align: center;">
                                <div style="font-size: 0.7rem; opacity: 0.9;">Termin 3</div>
                                <div style="font-weight: 600;">25%</div>
                                <div style="font-size: 0.65rem;">📄 Invoice</div>
                            </div>
                            <div style="background: #e2e8f0; color: #64748b; padding: 0.75rem; border-radius: 8px; text-align: center;">
                                <div style="font-size: 0.7rem;">Termin 4</div>
                                <div style="font-weight: 600;">20%</div>
                                <div style="font-size: 0.65rem;">⏳ Pending</div>
                            </div>
                            <div style="background: #e2e8f0; color: #64748b; padding: 0.75rem; border-radius: 8px; text-align: center;">
                                <div style="font-size: 0.7rem;">Final</div>
                                <div style="font-weight: 600;">10%</div>
                                <div style="font-size: 0.65rem;">⏳ Pending</div>
                            </div>
                        </div>

                        <!-- Retensi Info -->
                        <div style="background: #fef3c7; border: 1px solid #f59e0b; padding: 0.75rem; border-radius: 8px; font-size: 0.85rem;">
                            💰 <strong>Retensi Outstanding:</strong> Rp 2.25 M (5% × Rp 45 M) - Release setelah masa pemeliharaan
                        </div>
                    </div>
                </div>

                <!-- Daftar Proyek -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header">
                        <span class="mockup-title">📋 Daftar Proyek</span>
                        <div class="mockup-actions">
                            <button class="mockup-btn">+ Proyek Baru</button>
                        </div>
                    </div>
                    <div class="mockup-content" style="padding: 0;">
                        <table class="mockup-table">
                            <thead>
                                <tr>
                                    <th>Nama Proyek</th>
                                    <th>Nilai</th>
                                    <th>Plan</th>
                                    <th>Actual</th>
                                    <th>SPI</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style="font-weight: 500;">Jembatan Sei Deli</td>
                                    <td>Rp 45 M</td>
                                    <td>68%</td>
                                    <td>65%</td>
                                    <td>0.96</td>
                                    <td><span style="background: #fef3c7; color: #92400e; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.75rem;">🟡 Minor Delay</span></td>
                                </tr>
                                <tr>
                                    <td style="font-weight: 500;">Dermaga Pelabuhan Baru</td>
                                    <td>Rp 32 M</td>
                                    <td>45%</td>
                                    <td>48%</td>
                                    <td>1.07</td>
                                    <td><span style="background: #dcfce7; color: #166534; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.75rem;">🟢 On Track</span></td>
                                </tr>
                                <tr>
                                    <td style="font-weight: 500;">Renovasi Gedung PRSU</td>
                                    <td>Rp 18 M</td>
                                    <td>55%</td>
                                    <td>42%</td>
                                    <td>0.76</td>
                                    <td><span style="background: #fef2f2; color: #991b1b; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.75rem;">🔴 Critical</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Project Detail with RAB/RAP -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #ec4899 0%, #be185d 100%);">
                        <span class="mockup-title">💼 Detail Proyek - Jembatan Sei Deli</span>
                    </div>
                    <div class="mockup-content">
                        <!-- Project Info -->
                        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-bottom: 1rem;">
                            <div style="background: #f8fafc; padding: 1rem; border-radius: 8px;">
                                <div style="font-weight: 600; margin-bottom: 0.75rem;">📝 Informasi Proyek</div>
                                <div style="display: grid; gap: 0.5rem; font-size: 0.85rem;">
                                    <div><span style="color: #64748b;">No. Kontrak:</span> SPK/2025/PPSU/045</div>
                                    <div><span style="color: #64748b;">Pemberi Kerja:</span> Pemprov SUMUT</div>
                                    <div><span style="color: #64748b;">Jenis:</span> Pekerjaan Konstruksi Jembatan</div>
                                    <div><span style="color: #64748b;">Durasi:</span> 180 hari kalender</div>
                                    <div><span style="color: #64748b;">Masa Pemeliharaan:</span> 180 hari</div>
                                </div>
                            </div>
                            <div style="background: #f8fafc; padding: 1rem; border-radius: 8px;">
                                <div style="font-weight: 600; margin-bottom: 0.75rem;">💰 Nilai Proyek</div>
                                <div style="display: grid; gap: 0.5rem; font-size: 0.85rem;">
                                    <div><span style="color: #64748b;">Nilai Kontrak:</span> <strong>Rp 45.000.000.000</strong></div>
                                    <div><span style="color: #64748b;">RAB (Penawaran):</span> Rp 48.500.000.000</div>
                                    <div><span style="color: #64748b;">RAP (Pelaksanaan):</span> Rp 38.250.000.000</div>
                                    <div><span style="color: #64748b;">Est. Margin:</span> <span style="color: #22c55e;">15% (Rp 6.75 M)</span></div>
                                </div>
                            </div>
                        </div>

                        <!-- RAB vs RAP Comparison -->
                        <div style="font-weight: 600; margin-bottom: 0.5rem;">📊 RAB vs RAP (Anggaran)</div>
                        <table class="mockup-table" style="font-size: 0.8rem;">
                            <thead>
                                <tr>
                                    <th>Item Pekerjaan</th>
                                    <th style="text-align: right;">RAB (Penawaran)</th>
                                    <th style="text-align: right;">RAP (Pelaksanaan)</th>
                                    <th style="text-align: right;">Selisih</th>
                                    <th>Margin</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Pekerjaan Persiapan</td>
                                    <td style="text-align: right;">2.500.000.000</td>
                                    <td style="text-align: right;">2.125.000.000</td>
                                    <td style="text-align: right; color: #22c55e;">+375.000.000</td>
                                    <td><span style="color: #22c55e;">15%</span></td>
                                </tr>
                                <tr>
                                    <td>Struktur Bawah (Pondasi)</td>
                                    <td style="text-align: right;">18.000.000.000</td>
                                    <td style="text-align: right;">15.300.000.000</td>
                                    <td style="text-align: right; color: #22c55e;">+2.700.000.000</td>
                                    <td><span style="color: #22c55e;">15%</span></td>
                                </tr>
                                <tr>
                                    <td>Struktur Atas (Lantai)</td>
                                    <td style="text-align: right;">15.000.000.000</td>
                                    <td style="text-align: right;">12.825.000.000</td>
                                    <td style="text-align: right; color: #22c55e;">+2.175.000.000</td>
                                    <td><span style="color: #22c55e;">14.5%</span></td>
                                </tr>
                                <tr>
                                    <td>Finishing & Mekanikal</td>
                                    <td style="text-align: right;">8.000.000.000</td>
                                    <td style="text-align: right;">8.000.000.000</td>
                                    <td style="text-align: right;">0</td>
                                    <td><span style="color: #f59e0b;">0%</span></td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr style="background: #fce7f3;">
                                    <td><strong>TOTAL</strong></td>
                                    <td style="text-align: right;"><strong>43.500.000.000</strong></td>
                                    <td style="text-align: right;"><strong>38.250.000.000</strong></td>
                                    <td style="text-align: right; color: #22c55e;"><strong>+5.250.000.000</strong></td>
                                    <td><strong>12%</strong></td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>

                <!-- PBJ Process -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%);">
                        <span class="mockup-title">📦 PBJ Konstruksi - HPS & Tender</span>
                        <div class="mockup-actions">
                            <button class="mockup-btn" style="background: white; color: #0d9488;">+ Buat Pengadaan</button>
                        </div>
                    </div>
                    <div class="mockup-content">
                        <!-- PBJ Status Cards -->
                        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.75rem; margin-bottom: 1rem;">
                            <div style="background: #f0fdfa; padding: 0.75rem; border-radius: 8px; text-align: center;">
                                <div style="font-size: 1.25rem; font-weight: 700; color: #0d9488;">3</div>
                                <div style="font-size: 0.7rem; color: #0d9488;">Proses HPS</div>
                            </div>
                            <div style="background: #dbeafe; padding: 0.75rem; border-radius: 8px; text-align: center;">
                                <div style="font-size: 1.25rem; font-weight: 700; color: #1d4ed8;">2</div>
                                <div style="font-size: 0.7rem; color: #1d4ed8;">Tender Aktif</div>
                            </div>
                            <div style="background: #fef3c7; padding: 0.75rem; border-radius: 8px; text-align: center;">
                                <div style="font-size: 1.25rem; font-weight: 700; color: #92400e;">1</div>
                                <div style="font-size: 0.7rem; color: #92400e;">Evaluasi</div>
                            </div>
                            <div style="background: #dcfce7; padding: 0.75rem; border-radius: 8px; text-align: center;">
                                <div style="font-size: 1.25rem; font-weight: 700; color: #166534;">5</div>
                                <div style="font-size: 0.7rem; color: #166534;">Kontrak Aktif</div>
                            </div>
                        </div>

                        <!-- HPS Form Sample -->
                        <div style="background: #f0fdfa; border: 1px solid #14b8a6; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
                            <div style="font-weight: 600; margin-bottom: 0.75rem;">📊 Penyusunan HPS - Pekerjaan Drainase</div>
                            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.75rem; font-size: 0.85rem;">
                                <div><span style="color: #64748b;">Pagu Anggaran:</span> Rp 5.000.000.000</div>
                                <div><span style="color: #64748b;">Metode:</span> Tender Terbuka</div>
                                <div><span style="color: #64748b;">Estimasi HPS:</span> Rp 4.750.000.000</div>
                                <div><span style="color: #64748b;">Status:</span> <span style="background: #f59e0b; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">Draft</span></div>
                            </div>
                        </div>

                        <!-- Tender List -->
                        <div style="font-weight: 600; margin-bottom: 0.5rem;">📄 Proses Tender Aktif</div>
                        <table class="mockup-table" style="font-size: 0.8rem;">
                            <thead>
                                <tr>
                                    <th>Paket Pekerjaan</th>
                                    <th>HPS</th>
                                    <th>Peserta</th>
                                    <th>Tahap</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Pekerjaan Jalan Akses</td>
                                    <td>Rp 3.2 M</td>
                                    <td>5 vendor</td>
                                    <td>Evaluasi Harga</td>
                                    <td><span style="background: #f59e0b; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.65rem;">🔄 Proses</span></td>
                                </tr>
                                <tr style="background: #dcfce7;">
                                    <td>Pengadaan Material Beton</td>
                                    <td>Rp 1.8 M</td>
                                    <td>3 vendor</td>
                                    <td>Penetapan Pemenang</td>
                                    <td><span style="background: #22c55e; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.65rem;">✅ Final</span></td>
                                </tr>
                            </tbody>
                        </table>

                        <!-- Tender Flow -->
                        <div style="margin-top: 1rem; font-size: 0.8rem;">
                            <div style="font-weight: 600; margin-bottom: 0.5rem;">📊 Alur Tender</div>
                            <div style="display: flex; justify-content: space-between; background: #f8fafc; padding: 0.75rem; border-radius: 8px;">
                                <div style="text-align: center;">
                                    <div style="background: #14b8a6; color: white; padding: 0.375rem; border-radius: 6px; margin-bottom: 0.25rem;">📊</div>
                                    <div>HPS</div>
                                </div>
                                <div style="display: flex; align-items: center;">→</div>
                                <div style="text-align: center;">
                                    <div style="background: #3b82f6; color: white; padding: 0.375rem; border-radius: 6px; margin-bottom: 0.25rem;">📩</div>
                                    <div>Undangan</div>
                                </div>
                                <div style="display: flex; align-items: center;">→</div>
                                <div style="text-align: center;">
                                    <div style="background: #8b5cf6; color: white; padding: 0.375rem; border-radius: 6px; margin-bottom: 0.25rem;">📝</div>
                                    <div>Aanwijzing</div>
                                </div>
                                <div style="display: flex; align-items: center;">→</div>
                                <div style="text-align: center;">
                                    <div style="background: #f59e0b; color: white; padding: 0.375rem; border-radius: 6px; margin-bottom: 0.25rem;">📥</div>
                                    <div>Penawaran</div>
                                </div>
                                <div style="display: flex; align-items: center;">→</div>
                                <div style="text-align: center;">
                                    <div style="background: #ec4899; color: white; padding: 0.375rem; border-radius: 6px; margin-bottom: 0.25rem;">⚖️</div>
                                    <div>Evaluasi</div>
                                </div>
                                <div style="display: flex; align-items: center;">→</div>
                                <div style="text-align: center;">
                                    <div style="background: #22c55e; color: white; padding: 0.375rem; border-radius: 6px; margin-bottom: 0.25rem;">🏆</div>
                                    <div>Pemenang</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Construction Log -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);">
                        <span class="mockup-title">📓 Log Konstruksi Harian</span>
                        <span style="background: rgba(255,255,255,0.2); padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">19 Januari 2026</span>
                    </div>
                    <div class="mockup-content">
                        <!-- Daily Summary -->
                        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.75rem; margin-bottom: 1rem;">
                            <div style="background: #dbeafe; padding: 0.75rem; border-radius: 8px; text-align: center;">
                                <div style="font-size: 1rem; font-weight: 700; color: #1d4ed8;">65%</div>
                                <div style="font-size: 0.7rem; color: #1d4ed8;">Progress Fisik</div>
                            </div>
                            <div style="background: #dcfce7; padding: 0.75rem; border-radius: 8px; text-align: center;">
                                <div style="font-size: 1rem; font-weight: 700; color: #166534;">45</div>
                                <div style="font-size: 0.7rem; color: #166534;">Tenaga Kerja</div>
                            </div>
                            <div style="background: #f3e8ff; padding: 0.75rem; border-radius: 8px; text-align: center;">
                                <div style="font-size: 1rem; font-weight: 700; color: #7c3aed;">3</div>
                                <div style="font-size: 0.7rem; color: #7c3aed;">Alat Berat</div>
                            </div>
                            <div style="background: #dcfce7; padding: 0.75rem; border-radius: 8px; text-align: center;">
                                <div style="font-size: 1rem; font-weight: 700; color: #166534;">0</div>
                                <div style="font-size: 0.7rem; color: #166534;">Insiden K3</div>
                            </div>
                        </div>

                        <!-- Daily Activities -->
                        <div style="font-weight: 600; margin-bottom: 0.5rem;">📝 Aktivitas Hari Ini</div>
                        <div style="display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1rem;">
                            <div style="background: #f8fafc; padding: 0.75rem; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
                                <div>
                                    <div style="font-weight: 500;">Pengecoran Pier 5 (Section A)</div>
                                    <div style="font-size: 0.75rem; color: #64748b;">08:00 - 15:00 | Volume: 45 m³</div>
                                </div>
                                <span style="background: #22c55e; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">✅ Selesai</span>
                            </div>
                            <div style="background: #f8fafc; padding: 0.75rem; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
                                <div>
                                    <div style="font-weight: 500;">Pemasangan Bekisting Pier 6</div>
                                    <div style="font-size: 0.75rem; color: #64748b;">08:00 - 17:00 | Progress: 60%</div>
                                </div>
                                <span style="background: #3b82f6; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">🔄 Ongoing</span>
                            </div>
                        </div>

                        <!-- Material Log -->
                        <div style="font-weight: 600; margin-bottom: 0.5rem;">📦 Log Material</div>
                        <table class="mockup-table" style="font-size: 0.8rem; margin-bottom: 1rem;">
                            <thead>
                                <tr>
                                    <th>Material</th>
                                    <th>In</th>
                                    <th>Out</th>
                                    <th>Stock</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Beton Ready Mix K-350</td>
                                    <td style="color: #22c55e;">+48 m³</td>
                                    <td style="color: #ef4444;">-45 m³</td>
                                    <td>3 m³</td>
                                    <td><span style="background: #22c55e; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.65rem;">OK</span></td>
                                </tr>
                                <tr style="background: #fef3c7;">
                                    <td>Besi Tulangan D-25</td>
                                    <td style="color: #22c55e;">+2 ton</td>
                                    <td style="color: #ef4444;">-3.5 ton</td>
                                    <td style="font-weight: 600;">5.2 ton</td>
                                    <td><span style="background: #f59e0b; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.65rem;">⚠️ Low</span></td>
                                </tr>
                            </tbody>
                        </table>

                        <!-- Manpower -->
                        <div style="font-weight: 600; margin-bottom: 0.5rem;">👷 Tenaga Kerja</div>
                        <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 0.5rem; margin-bottom: 1rem; font-size: 0.8rem;">
                            <div style="background: #f8fafc; padding: 0.5rem; border-radius: 6px; text-align: center;">
                                <div style="font-weight: 600;">12</div>
                                <div style="color: #64748b; font-size: 0.7rem;">Tukang Batu</div>
                            </div>
                            <div style="background: #f8fafc; padding: 0.5rem; border-radius: 6px; text-align: center;">
                                <div style="font-weight: 600;">8</div>
                                <div style="color: #64748b; font-size: 0.7rem;">Tukang Besi</div>
                            </div>
                            <div style="background: #f8fafc; padding: 0.5rem; border-radius: 6px; text-align: center;">
                                <div style="font-weight: 600;">15</div>
                                <div style="color: #64748b; font-size: 0.7rem;">Pekerja</div>
                            </div>
                            <div style="background: #f8fafc; padding: 0.5rem; border-radius: 6px; text-align: center;">
                                <div style="font-weight: 600;">3</div>
                                <div style="color: #64748b; font-size: 0.7rem;">Operator</div>
                            </div>
                            <div style="background: #f8fafc; padding: 0.5rem; border-radius: 6px; text-align: center;">
                                <div style="font-weight: 600;">7</div>
                                <div style="color: #64748b; font-size: 0.7rem;">Mandor/Staf</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- K3 Safety Log -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);">
                        <span class="mockup-title">⚠️ K3 (Keselamatan & Kesehatan Kerja)</span>
                    </div>
                    <div class="mockup-content">
                        <!-- K3 Status -->
                        <div style="background: #dcfce7; border: 2px solid #22c55e; padding: 1rem; border-radius: 8px; margin-bottom: 1rem; display: flex; align-items: center; gap: 1rem;">
                            <div style="font-size: 2rem;">✅</div>
                            <div>
                                <div style="font-weight: 600; color: #166534;">Status K3 Hari Ini: AMAN</div>
                                <div style="font-size: 0.85rem; color: #64748b;">0 Insiden | Checklist lengkap | APD 100%</div>
                            </div>
                        </div>

                        <!-- K3 Checklist -->
                        <div style="font-weight: 600; margin-bottom: 0.5rem;">☑️ Checklist Harian</div>
                        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.5rem; margin-bottom: 1rem;">
                            <div style="background: #dcfce7; padding: 0.5rem 0.75rem; border-radius: 6px; font-size: 0.85rem;">✅ Safety Briefing pagi (07:00)</div>
                            <div style="background: #dcfce7; padding: 0.5rem 0.75rem; border-radius: 6px; font-size: 0.85rem;">✅ APD lengkap semua pekerja</div>
                            <div style="background: #dcfce7; padding: 0.5rem 0.75rem; border-radius: 6px; font-size: 0.85rem;">✅ Area kerja diberi rambu</div>
                            <div style="background: #dcfce7; padding: 0.5rem 0.75rem; border-radius: 6px; font-size: 0.85rem;">✅ P3K tersedia di lokasi</div>
                            <div style="background: #dcfce7; padding: 0.5rem 0.75rem; border-radius: 6px; font-size: 0.85rem;">✅ Alat berat inspeksi OK</div>
                            <div style="background: #dcfce7; padding: 0.5rem 0.75rem; border-radius: 6px; font-size: 0.85rem;">✅ APAR tersedia & aktif</div>
                        </div>

                        <!-- Risk Integration -->
                        <div style="background: #fef3c7; border: 1px solid #f59e0b; padding: 1rem; border-radius: 8px;">
                            <div style="font-weight: 600; margin-bottom: 0.5rem;">🚨 Risiko Aktif (Link ke Modul 9)</div>
                            <div style="display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.85rem;">
                                <div style="display: flex; justify-content: space-between; align-items: center;">
                                    <span>🟡 Cuaca ekstrem - risiko petir saat pengecoran</span>
                                    <button style="background: #f59e0b; color: white; border: none; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.7rem; cursor: pointer;">🔗 Detail</button>
                                </div>
                                <div style="display: flex; justify-content: space-between; align-items: center;">
                                    <span>🟡 Material shortage - stock besi menipis</span>
                                    <button style="background: #f59e0b; color: white; border: none; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.7rem; cursor: pointer;">🔗 Detail</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Photo Documentation -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);">
                        <span class="mockup-title">📷 Dokumentasi Foto Progress</span>
                        <div class="mockup-actions">
                            <button class="mockup-btn" style="background: white; color: #4f46e5;">+ Upload</button>
                        </div>
                    </div>
                    <div class="mockup-content">
                        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.75rem;">
                            <div style="background: #f1f5f9; aspect-ratio: 4/3; border-radius: 8px; display: flex; flex-direction: column; align-items: center; justify-content: center; position: relative;">
                                <div style="font-size: 2rem;">📷</div>
                                <div style="font-size: 0.7rem; color: #64748b;">Pier 5 - Cor</div>
                                <div style="position: absolute; bottom: 0.25rem; right: 0.25rem; background: rgba(0,0,0,0.5); color: white; padding: 0.125rem 0.25rem; border-radius: 4px; font-size: 0.6rem;">08:30</div>
                            </div>
                            <div style="background: #f1f5f9; aspect-ratio: 4/3; border-radius: 8px; display: flex; flex-direction: column; align-items: center; justify-content: center; position: relative;">
                                <div style="font-size: 2rem;">📷</div>
                                <div style="font-size: 0.7rem; color: #64748b;">Pier 5 - Progress</div>
                                <div style="position: absolute; bottom: 0.25rem; right: 0.25rem; background: rgba(0,0,0,0.5); color: white; padding: 0.125rem 0.25rem; border-radius: 4px; font-size: 0.6rem;">12:00</div>
                            </div>
                            <div style="background: #f1f5f9; aspect-ratio: 4/3; border-radius: 8px; display: flex; flex-direction: column; align-items: center; justify-content: center; position: relative;">
                                <div style="font-size: 2rem;">📷</div>
                                <div style="font-size: 0.7rem; color: #64748b;">Bekisting Pier 6</div>
                                <div style="position: absolute; bottom: 0.25rem; right: 0.25rem; background: rgba(0,0,0,0.5); color: white; padding: 0.125rem 0.25rem; border-radius: 4px; font-size: 0.6rem;">14:00</div>
                            </div>
                            <div style="background: #f1f5f9; aspect-ratio: 4/3; border-radius: 8px; display: flex; flex-direction: column; align-items: center; justify-content: center; position: relative;">
                                <div style="font-size: 2rem;">📷</div>
                                <div style="font-size: 0.7rem; color: #64748b;">Overview Site</div>
                                <div style="position: absolute; bottom: 0.25rem; right: 0.25rem; background: rgba(0,0,0,0.5); color: white; padding: 0.125rem 0.25rem; border-radius: 4px; font-size: 0.6rem;">16:00</div>
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
window.ppsuModules.push(modul_teknik);
