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
            }
        ]
    },

    // ============================================
    // MERMAID DIAGRAM
    // ============================================
    diagram: {
        title: 'Diagram Alur - Sistem Teknik dan Perencanaan',
        mermaid: `flowchart TB
subgraph PROJECT["🏗️ MANAJEMEN PROYEK"]
    direction TB
    P1[Setup<br>Project] --> P2[Define<br>WBS]
    P2 --> P3[Baseline<br>Schedule]
    P3 --> P4[Execute<br>& Track]
end

subgraph CCTV["📹 CCTV MONITORING"]
    direction TB
    C1[IP Camera<br>di Site] --> C2[Stream to<br>Server]
    C2 --> C3[Dashboard<br>Multi-View]
    C2 --> C4[Recording<br>30 hari]
    C3 --> C5[Remote<br>Monitoring]
end

subgraph PROGRESS["📈 ACTUAL vs PLAN"]
    direction TB
    R1[Input<br>Progress %] --> R2[Compare vs<br>Baseline]
    R2 --> R3[Calculate<br>SPI]
    R3 --> R4{SPI<br>Check}
    R4 -->|≥ 1.0| R5[🟢 On Track]
    R4 -->|0.8-0.99| R6[🟡 Warning]
    R4 -->|< 0.8| R7[🔴 Critical]
end

subgraph BILLING["💰 PENAGIHAN TERMIN"]
    direction TB
    B1[Milestone<br>Achieved] --> B2[Generate<br>BAP]
    B2 --> B3[Approval<br>BAP]
    B3 --> B4[Generate<br>Invoice]
    B4 --> B5[Post to<br>Keuangan]
end

P4 --> C1
P4 --> R1
R5 --> B1
R6 --> B1
B5 --> KEU[(💰 MODUL<br>KEUANGAN)]

style PROJECT fill:#dbeafe,stroke:#3b82f6,color:#1e3a5f
style CCTV fill:#dcfce7,stroke:#22c55e,color:#166534
style PROGRESS fill:#f3e8ff,stroke:#a855f7,color:#581c87
style BILLING fill:#fef3c7,stroke:#f59e0b,color:#78350f
style KEU fill:#fce7f3,stroke:#ec4899,color:#831843`
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
