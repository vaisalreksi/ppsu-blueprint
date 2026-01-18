// ============================================
// MODUL 9 - SISTEM MANAJEMEN RISIKO
// PT Pembangunan Prasarana Sumatera Utara (Perseroda)
// ============================================

const modul_risiko = {
    id: 'modul_risiko',
    title: 'Modul 9 - Sistem Manajemen Risiko',
    subtitle: 'Risk Register, Heat Map, KRI Monitoring & Early Warning System',
    icon: '⚠️',
    menuTitle: 'Manajemen Risiko',

    // ============================================
    // HASIL ANALISA
    // ============================================
    analisa: {
        title: 'Hasil Analisa - Sistem Manajemen Risiko',
        items: [
            {
                icon: '🎯',
                iconBg: 'rgba(37, 99, 235, 0.1)',
                iconColor: '#2563eb',
                title: 'Tujuan Modul',
                content: `Membangun sistem manajemen risiko terintegrasi dengan risk register digital, 
                         penilaian risiko terstandar (likelihood × impact), heat map visualisasi,
                         monitoring KRI, dan early warning system yang terintegrasi semua modul.`
            },
            {
                icon: '🚨',
                iconBg: 'rgba(239, 68, 68, 0.1)',
                iconColor: '#ef4444',
                title: 'Kondisi Saat Ini (Masalah)',
                content: `<strong>1. Identifikasi:</strong> Ad-hoc, tidak terstruktur<br>
                         <strong>2. Risk Register:</strong> Tidak ada/Excel terpisah<br>
                         <strong>3. Assessment:</strong> Tidak konsisten, subjektif<br>
                         <strong>4. Mitigasi:</strong> Reaktif, terlambat<br>
                         <strong>5. Monitoring:</strong> Manual, tidak real-time`
            },
            {
                icon: '📊',
                iconBg: 'rgba(16, 185, 129, 0.1)',
                iconColor: '#10b981',
                title: 'Risk Assessment Matrix (5×5)',
                content: `<strong>Likelihood (1-5):</strong> Rare → Almost Certain<br>
                         <strong>Impact (1-5):</strong> Insignificant → Catastrophic<br>
                         <strong>Risk Score:</strong> L × I (1-25)<br>
                         🟢 1-4: Low | 🟡 5-9: Medium | 🟠 10-15: High | 🔴 16-25: Extreme`
            },
            {
                icon: '🛡️',
                iconBg: 'rgba(139, 92, 246, 0.1)',
                iconColor: '#8b5cf6',
                title: 'Strategi Mitigasi (4T)',
                content: `🚫 <strong>Terminate:</strong> Hindari aktivitas berisiko<br>
                         📉 <strong>Treat:</strong> Kurangi likelihood/impact<br>
                         🔄 <strong>Transfer:</strong> Asuransi, outsourcing<br>
                         ✅ <strong>Tolerate:</strong> Terima dengan monitoring`
            },
            {
                icon: '📈',
                iconBg: 'rgba(245, 158, 11, 0.1)',
                iconColor: '#f59e0b',
                title: 'Key Risk Indicators (KRI)',
                content: `<strong>AR Aging:</strong> 🟢 <5% | 🟡 5-10% | 🔴 >10%<br>
                         <strong>Project SPI:</strong> 🟢 >0.95 | 🟡 0.8-0.95 | 🔴 <0.8<br>
                         <strong>Turnover:</strong> 🟢 <5% | 🟡 5-10% | 🔴 >10%<br>
                         <strong>Alert otomatis</strong> jika KRI breach threshold`
            },
            {
                icon: '🔗',
                iconBg: 'rgba(6, 182, 212, 0.1)',
                iconColor: '#06b6d4',
                title: 'Integrasi Semua Modul',
                content: `<strong>Keuangan:</strong> → Risiko Likuiditas<br>
                         <strong>Transportasi:</strong> → Risiko Keselamatan<br>
                         <strong>Teknik:</strong> → Risiko Proyek<br>
                         <strong>PRSU:</strong> → Risiko Pendapatan<br>
                         <strong>HR:</strong> → Risiko SDM`
            }
        ]
    },

    // ============================================
    // MERMAID DIAGRAM
    // ============================================
    diagram: {
        title: 'Diagram Alur - Sistem Manajemen Risiko',
        mermaid: `flowchart TB
subgraph IDENTIFY["🔍 IDENTIFIKASI RISIKO"]
    direction TB
    I1[Input<br>Risiko] --> I2[Kategorisasi]
    I2 --> I3[Assign<br>Risk Owner]
    I3 --> I4[Risk<br>Register]
end

subgraph ASSESS["📊 PENILAIAN RISIKO"]
    direction TB
    A1[Nilai<br>Likelihood] --> A3[Calculate<br>Score L×I]
    A2[Nilai<br>Impact] --> A3
    A3 --> A4{Risk<br>Level?}
    A4 -->|1-4| A5[🟢 Low]
    A4 -->|5-9| A6[🟡 Medium]
    A4 -->|10-15| A7[🟠 High]
    A4 -->|16-25| A8[🔴 Extreme]
end

subgraph RESPOND["🛡️ PENANGANAN"]
    direction TB
    R1{Strategi<br>4T?}
    R1 -->|Terminate| R2[🚫 Hindari]
    R1 -->|Treat| R3[📉 Kurangi]
    R1 -->|Transfer| R4[🔄 Asuransi]
    R1 -->|Tolerate| R5[✅ Terima]
end

subgraph MONITOR["📈 MONITORING"]
    direction TB
    M1[KRI<br>Tracking] --> M2{Breach<br>Threshold?}
    M2 -->|Ya| M3[🔔 Alert<br>Warning]
    M2 -->|Tidak| M4[Continue<br>Monitor]
    M3 --> M5[Notify<br>Risk Owner]
end

I4 --> A1
I4 --> A2
A7 --> R1
A8 --> R1
R3 --> M1
R5 --> M1

style IDENTIFY fill:#dbeafe,stroke:#3b82f6,color:#1e3a5f
style ASSESS fill:#dcfce7,stroke:#22c55e,color:#166534
style RESPOND fill:#f3e8ff,stroke:#a855f7,color:#581c87
style MONITOR fill:#fef3c7,stroke:#f59e0b,color:#78350f`
    },

    // ============================================
    // PROTOTYPE HTML
    // ============================================
    prototype: {
        title: 'Prototype UI - Sistem Manajemen Risiko',
        html: `
            <div class="prototype-container">
                <div class="prototype-header">
                    <h3>📱 Preview Prototype UI</h3>
                </div>
                
                <!-- Dashboard Risiko -->
                <div class="prototype-mockup">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);">
                        <span class="mockup-title">⚠️ Dashboard Manajemen Risiko</span>
                    </div>
                    <div class="mockup-content">
                        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
                            <div style="background: linear-gradient(135deg, #ef4444, #dc2626); color: white; padding: 1rem; border-radius: 12px; text-align: center;">
                                <div style="font-size: 0.7rem; opacity: 0.9; margin-bottom: 0.25rem;">Extreme Risk</div>
                                <div style="font-size: 1.5rem; font-weight: 700;">2</div>
                                <div style="font-size: 0.65rem; opacity: 0.8;">🔴 Immediate Action</div>
                            </div>
                            <div style="background: linear-gradient(135deg, #f59e0b, #d97706); color: white; padding: 1rem; border-radius: 12px; text-align: center;">
                                <div style="font-size: 0.7rem; opacity: 0.9; margin-bottom: 0.25rem;">High Risk</div>
                                <div style="font-size: 1.5rem; font-weight: 700;">5</div>
                                <div style="font-size: 0.65rem; opacity: 0.8;">🟠 Mitigate</div>
                            </div>
                            <div style="background: linear-gradient(135deg, #eab308, #ca8a04); color: white; padding: 1rem; border-radius: 12px; text-align: center;">
                                <div style="font-size: 0.7rem; opacity: 0.9; margin-bottom: 0.25rem;">Medium Risk</div>
                                <div style="font-size: 1.5rem; font-weight: 700;">12</div>
                                <div style="font-size: 0.65rem; opacity: 0.8;">🟡 Control</div>
                            </div>
                            <div style="background: linear-gradient(135deg, #22c55e, #16a34a); color: white; padding: 1rem; border-radius: 12px; text-align: center;">
                                <div style="font-size: 0.7rem; opacity: 0.9; margin-bottom: 0.25rem;">Low Risk</div>
                                <div style="font-size: 1.5rem; font-weight: 700;">18</div>
                                <div style="font-size: 0.65rem; opacity: 0.8;">🟢 Monitor</div>
                            </div>
                        </div>

                        <!-- Alert Banner -->
                        <div style="background: #fef2f2; border: 1px solid #ef4444; padding: 0.75rem 1rem; border-radius: 8px; display: flex; align-items: center; gap: 0.5rem; animation: pulse 2s infinite;">
                            <span style="font-size: 1.25rem;">🚨</span>
                            <div style="font-size: 0.85rem;">
                                <strong>ALERT:</strong> KRI "AR Aging > 90 hari" breach threshold 🔴 (Actual: 12%, Threshold: 10%)
                            </div>
                        </div>
                        <style>
                            @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.8; } }
                        </style>
                    </div>
                </div>

                <!-- Heat Map -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);">
                        <span class="mockup-title">🗺️ Risk Heat Map (Likelihood × Impact)</span>
                    </div>
                    <div class="mockup-content">
                        <div style="display: grid; grid-template-columns: 40px repeat(5, 1fr); gap: 4px; font-size: 0.75rem;">
                            <!-- Y-Axis Label -->
                            <div></div>
                            <div style="text-align: center; font-weight: 600; padding: 0.5rem;">1<br><span style="font-size: 0.6rem;">Rare</span></div>
                            <div style="text-align: center; font-weight: 600; padding: 0.5rem;">2<br><span style="font-size: 0.6rem;">Unlikely</span></div>
                            <div style="text-align: center; font-weight: 600; padding: 0.5rem;">3<br><span style="font-size: 0.6rem;">Possible</span></div>
                            <div style="text-align: center; font-weight: 600; padding: 0.5rem;">4<br><span style="font-size: 0.6rem;">Likely</span></div>
                            <div style="text-align: center; font-weight: 600; padding: 0.5rem;">5<br><span style="font-size: 0.6rem;">Certain</span></div>
                            
                            <!-- Row 5 (Catastrophic) -->
                            <div style="writing-mode: vertical-rl; text-orientation: mixed; font-weight: 600; display: flex; align-items: center; justify-content: center;">5</div>
                            <div style="background: #fef08a; padding: 1rem; border-radius: 4px; text-align: center;">5</div>
                            <div style="background: #fed7aa; padding: 1rem; border-radius: 4px; text-align: center;">10</div>
                            <div style="background: #fca5a5; padding: 1rem; border-radius: 4px; text-align: center;">15<br><span style="font-size: 0.6rem; background: white; padding: 0 4px; border-radius: 2px;">●2</span></div>
                            <div style="background: #ef4444; color: white; padding: 1rem; border-radius: 4px; text-align: center;">20<br><span style="font-size: 0.6rem; background: rgba(255,255,255,0.3); padding: 0 4px; border-radius: 2px;">●1</span></div>
                            <div style="background: #dc2626; color: white; padding: 1rem; border-radius: 4px; text-align: center;">25<br><span style="font-size: 0.6rem; background: rgba(255,255,255,0.3); padding: 0 4px; border-radius: 2px;">●1</span></div>
                            
                            <!-- Row 4 (Major) -->
                            <div style="writing-mode: vertical-rl; text-orientation: mixed; font-weight: 600; display: flex; align-items: center; justify-content: center;">4</div>
                            <div style="background: #bbf7d0; padding: 1rem; border-radius: 4px; text-align: center;">4</div>
                            <div style="background: #fef08a; padding: 1rem; border-radius: 4px; text-align: center;">8<br><span style="font-size: 0.6rem; background: white; padding: 0 4px; border-radius: 2px;">●3</span></div>
                            <div style="background: #fed7aa; padding: 1rem; border-radius: 4px; text-align: center;">12<br><span style="font-size: 0.6rem; background: white; padding: 0 4px; border-radius: 2px;">●2</span></div>
                            <div style="background: #fca5a5; padding: 1rem; border-radius: 4px; text-align: center;">16</div>
                            <div style="background: #ef4444; color: white; padding: 1rem; border-radius: 4px; text-align: center;">20</div>
                            
                            <!-- Row 3 (Moderate) -->
                            <div style="writing-mode: vertical-rl; text-orientation: mixed; font-weight: 600; display: flex; align-items: center; justify-content: center;">3</div>
                            <div style="background: #bbf7d0; padding: 1rem; border-radius: 4px; text-align: center;">3<br><span style="font-size: 0.6rem; background: white; padding: 0 4px; border-radius: 2px;">●4</span></div>
                            <div style="background: #fef08a; padding: 1rem; border-radius: 4px; text-align: center;">6<br><span style="font-size: 0.6rem; background: white; padding: 0 4px; border-radius: 2px;">●5</span></div>
                            <div style="background: #fef08a; padding: 1rem; border-radius: 4px; text-align: center;">9<br><span style="font-size: 0.6rem; background: white; padding: 0 4px; border-radius: 2px;">●4</span></div>
                            <div style="background: #fed7aa; padding: 1rem; border-radius: 4px; text-align: center;">12<br><span style="font-size: 0.6rem; background: white; padding: 0 4px; border-radius: 2px;">●1</span></div>
                            <div style="background: #fca5a5; padding: 1rem; border-radius: 4px; text-align: center;">15</div>
                            
                            <!-- Row 2 (Minor) -->
                            <div style="writing-mode: vertical-rl; text-orientation: mixed; font-weight: 600; display: flex; align-items: center; justify-content: center;">2</div>
                            <div style="background: #bbf7d0; padding: 1rem; border-radius: 4px; text-align: center;">2<br><span style="font-size: 0.6rem; background: white; padding: 0 4px; border-radius: 2px;">●6</span></div>
                            <div style="background: #bbf7d0; padding: 1rem; border-radius: 4px; text-align: center;">4<br><span style="font-size: 0.6rem; background: white; padding: 0 4px; border-radius: 2px;">●5</span></div>
                            <div style="background: #fef08a; padding: 1rem; border-radius: 4px; text-align: center;">6</div>
                            <div style="background: #fef08a; padding: 1rem; border-radius: 4px; text-align: center;">8</div>
                            <div style="background: #fed7aa; padding: 1rem; border-radius: 4px; text-align: center;">10</div>
                            
                            <!-- Row 1 (Insignificant) -->
                            <div style="writing-mode: vertical-rl; text-orientation: mixed; font-weight: 600; display: flex; align-items: center; justify-content: center;">1</div>
                            <div style="background: #bbf7d0; padding: 1rem; border-radius: 4px; text-align: center;">1<br><span style="font-size: 0.6rem; background: white; padding: 0 4px; border-radius: 2px;">●3</span></div>
                            <div style="background: #bbf7d0; padding: 1rem; border-radius: 4px; text-align: center;">2</div>
                            <div style="background: #bbf7d0; padding: 1rem; border-radius: 4px; text-align: center;">3</div>
                            <div style="background: #bbf7d0; padding: 1rem; border-radius: 4px; text-align: center;">4</div>
                            <div style="background: #fef08a; padding: 1rem; border-radius: 4px; text-align: center;">5</div>
                        </div>

                        <!-- Legend -->
                        <div style="display: flex; gap: 1.5rem; margin-top: 1rem; justify-content: center; font-size: 0.75rem;">
                            <div style="display: flex; align-items: center; gap: 0.25rem;">
                                <div style="width: 16px; height: 16px; background: #22c55e; border-radius: 4px;"></div>
                                <span>Low (1-4)</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 0.25rem;">
                                <div style="width: 16px; height: 16px; background: #eab308; border-radius: 4px;"></div>
                                <span>Medium (5-9)</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 0.25rem;">
                                <div style="width: 16px; height: 16px; background: #f97316; border-radius: 4px;"></div>
                                <span>High (10-15)</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 0.25rem;">
                                <div style="width: 16px; height: 16px; background: #ef4444; border-radius: 4px;"></div>
                                <span>Extreme (16-25)</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- KRI Monitoring -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header" style="background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);">
                        <span class="mockup-title">📈 KRI Monitoring Dashboard</span>
                    </div>
                    <div class="mockup-content">
                        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;">
                            <!-- KRI Card 1 -->
                            <div style="background: #fef2f2; border: 2px solid #ef4444; padding: 1rem; border-radius: 8px;">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                                    <span style="font-weight: 600;">AR Aging > 90 hari</span>
                                    <span style="background: #ef4444; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">🔴 BREACH</span>
                                </div>
                                <div style="font-size: 1.5rem; font-weight: 700; color: #ef4444;">12%</div>
                                <div style="font-size: 0.75rem; color: #64748b;">Threshold: <span style="color: #22c55e;">< 5%</span> | <span style="color: #eab308;">5-10%</span> | <span style="color: #ef4444;">> 10%</span></div>
                            </div>
                            
                            <!-- KRI Card 2 -->
                            <div style="background: #fefce8; border: 2px solid #eab308; padding: 1rem; border-radius: 8px;">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                                    <span style="font-weight: 600;">Project SPI Average</span>
                                    <span style="background: #eab308; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">🟡 WARNING</span>
                                </div>
                                <div style="font-size: 1.5rem; font-weight: 700; color: #eab308;">0.92</div>
                                <div style="font-size: 0.75rem; color: #64748b;">Threshold: <span style="color: #22c55e;">> 0.95</span> | <span style="color: #eab308;">0.8-0.95</span> | <span style="color: #ef4444;">< 0.8</span></div>
                            </div>
                            
                            <!-- KRI Card 3 -->
                            <div style="background: #dcfce7; border: 2px solid #22c55e; padding: 1rem; border-radius: 8px;">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                                    <span style="font-weight: 600;">Employee Turnover</span>
                                    <span style="background: #22c55e; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">🟢 NORMAL</span>
                                </div>
                                <div style="font-size: 1.5rem; font-weight: 700; color: #22c55e;">3.2%</div>
                                <div style="font-size: 0.75rem; color: #64748b;">Threshold: <span style="color: #22c55e;">< 5%</span> | <span style="color: #eab308;">5-10%</span> | <span style="color: #ef4444;">> 10%</span></div>
                            </div>
                            
                            <!-- KRI Card 4 -->
                            <div style="background: #dcfce7; border: 2px solid #22c55e; padding: 1rem; border-radius: 8px;">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                                    <span style="font-weight: 600;">PRSU Occupancy Rate</span>
                                    <span style="background: #22c55e; color: white; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">🟢 NORMAL</span>
                                </div>
                                <div style="font-size: 1.5rem; font-weight: 700; color: #22c55e;">68%</div>
                                <div style="font-size: 0.75rem; color: #64748b;">Threshold: <span style="color: #22c55e;">> 60%</span> | <span style="color: #eab308;">40-60%</span> | <span style="color: #ef4444;">< 40%</span></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Risk Register -->
                <div class="prototype-mockup" style="margin-top: 1.5rem;">
                    <div class="mockup-header">
                        <span class="mockup-title">🗂️ Risk Register</span>
                        <div class="mockup-actions">
                            <button class="mockup-btn">+ Tambah Risiko</button>
                        </div>
                    </div>
                    <div class="mockup-content" style="padding: 0;">
                        <table class="mockup-table">
                            <thead>
                                <tr>
                                    <th>Risk ID</th>
                                    <th>Risiko</th>
                                    <th>Kategori</th>
                                    <th>L</th>
                                    <th>I</th>
                                    <th>Score</th>
                                    <th>Level</th>
                                    <th>Mitigasi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style="background: #fef2f2;">
                                    <td style="font-family: monospace;">R-2026-001</td>
                                    <td>Gagal bayar piutang proyek</td>
                                    <td>💰 Keuangan</td>
                                    <td>5</td>
                                    <td>5</td>
                                    <td style="font-weight: 700;">25</td>
                                    <td><span style="background: #ef4444; color: white; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">🔴 Extreme</span></td>
                                    <td style="font-size: 0.75rem;">📉 Treat - Review policy</td>
                                </tr>
                                <tr style="background: #fef2f2;">
                                    <td style="font-family: monospace;">R-2026-003</td>
                                    <td>Overcapacity kapal ferry</td>
                                    <td>⚙️ Operasional</td>
                                    <td>4</td>
                                    <td>5</td>
                                    <td style="font-weight: 700;">20</td>
                                    <td><span style="background: #ef4444; color: white; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">🔴 Extreme</span></td>
                                    <td style="font-size: 0.75rem;">📉 Treat - Capacity system</td>
                                </tr>
                                <tr style="background: #fff7ed;">
                                    <td style="font-family: monospace;">R-2026-005</td>
                                    <td>Keterlambatan proyek infrastruktur</td>
                                    <td>⚙️ Operasional</td>
                                    <td>3</td>
                                    <td>5</td>
                                    <td style="font-weight: 700;">15</td>
                                    <td><span style="background: #f97316; color: white; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">🟠 High</span></td>
                                    <td style="font-size: 0.75rem;">📉 Treat - Progress monitor</td>
                                </tr>
                                <tr>
                                    <td style="font-family: monospace;">R-2026-008</td>
                                    <td>Kerusakan aset kendaraan</td>
                                    <td>⚙️ Operasional</td>
                                    <td>3</td>
                                    <td>2</td>
                                    <td style="font-weight: 700;">6</td>
                                    <td><span style="background: #eab308; color: white; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">🟡 Medium</span></td>
                                    <td style="font-size: 0.75rem;">🔄 Transfer - Asuransi</td>
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
window.ppsuModules.push(modul_risiko);
