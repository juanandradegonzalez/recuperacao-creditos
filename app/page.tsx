"use client"

import { useState } from "react"
import AuthGuard from "@/components/auth-guard"
import {
  ChevronDown,
  TrendingUp,
  DollarSign,
  Scale,
  CheckCircle,
  Clock,
  Award,
  Zap,
  Building2,
  MapPin,
  LogOut,
} from "lucide-react"
import { useRouter } from "next/navigation"

function HomePage() {
  const [activeTab, setActiveTab] = useState("municipios")
  const [expandedCard, setExpandedCard] = useState<string | null>(null)
  const router = useRouter()

  const toggleCard = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId)
  }

  const handleTabClick = (tabName: string, event: any) => {
    event.preventDefault()
    event.stopPropagation()
    setActiveTab(tabName)
  }

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated")
    localStorage.removeItem("authTime")
    router.push("/login")
  }

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-[0.03]"
        style={{
          backgroundImage: "url('https://img.odcdn.com.br/wp-content/uploads/2023/07/Energia-eolica-1.jpg')",
          zIndex: 0,
        }}
      ></div>

      {/* Header */}
      <header className="relative z-50 bg-white shadow-lg border-b border-gray-200 sticky top-0">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-u8BrQfLq0WWkuf6t1ubSuMnNdGvMkS.png"
              alt="Rarotec"
              className="h-12"
            />
            <div className="flex items-center gap-6">
              <div className="text-right">
                <h2 className="text-xl font-bold text-gray-900">Análise de Recuperação de Créditos</h2>
                <p className="text-gray-600">Energia Eólica - Reestruturação Fazendária</p>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-300"
                title="Sair"
              >
                <LogOut size={16} />
                <span className="hidden sm:inline">Sair</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-16 px-6 bg-white shadow-xl border-b border-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Impacto Tributário dos Aerogeradores</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Análise completa da arrecadação tributária nas fases de instalação, operação e manutenção dos parques
            eólicos
          </p>
        </div>
      </section>

      {/* Executive Summary */}
      <div className="max-w-6xl mx-auto px-6 mb-12 mt-12 relative z-10">
        <section className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-200 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-green-500"></div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">Resumo Executivo</h2>

          <div className="text-lg text-gray-700 space-y-4 mb-8">
            <p>
              Esta análise apresenta o potencial de recuperação tributária gerada pelos aerogeradores nos municípios
              estudados, incluindo as fases de instalação, operação e manutenção dos parques eólicos.
            </p>
            <p>
              A consultoria tributária especializada identificou oportunidades significativas de incremento de
              arrecadação através da implementação adequada da legislação tributária municipal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl text-center shadow-xl border border-gray-100 relative overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-green-500"></div>
              <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg hover:bg-blue-600 transition-colors duration-300">
                <DollarSign className="text-white" size={28} />
              </div>
              <h3 className="font-bold text-gray-800 mb-2 text-lg">Potencial por Parque</h3>
              <div className="text-3xl font-bold text-blue-600 mb-1 hover:text-blue-700 transition-colors duration-300">
                R$ 2M
              </div>
              <div className="text-gray-600 text-sm">Média de impostos devidos</div>
            </div>

            <div className="bg-white p-6 rounded-xl text-center shadow-xl border border-gray-100 relative overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-green-500"></div>
              <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg hover:bg-green-600 transition-colors duration-300">
                <MapPin className="text-white" size={28} />
              </div>
              <h3 className="font-bold text-gray-800 mb-2 text-lg">Taxa de Ocupação</h3>
              <div className="text-3xl font-bold text-blue-600 mb-1 hover:text-blue-700 transition-colors duration-300">
                R$ 5-10K
              </div>
              <div className="text-gray-600 text-sm">Por aerogerador/ano</div>
            </div>

            <div className="bg-white p-6 rounded-xl text-center shadow-xl border border-gray-100 relative overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-green-500"></div>
              <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg hover:bg-purple-600 transition-colors duration-300">
                <Zap className="text-white" size={28} />
              </div>
              <h3 className="font-bold text-gray-800 mb-2 text-lg">Taxa de Máquinas</h3>
              <div className="text-3xl font-bold text-blue-600 mb-1 hover:text-blue-700 transition-colors duration-300">
                R$ 5-10K
              </div>
              <div className="text-gray-600 text-sm">Por aerogerador/ano</div>
            </div>
          </div>
        </section>
      </div>

      {/* Tabs Navigation */}
      <div className="max-w-6xl mx-auto px-6 mb-8 relative z-10">
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "16px 16px 0 0",
            border: "1px solid #e5e7eb",
            borderBottom: "none",
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          }}
        >
          <div style={{ display: "flex" }}>
            <button
              type="button"
              onClick={(e) => handleTabClick("municipios", e)}
              onMouseDown={(e) => handleTabClick("municipios", e)}
              style={{
                flex: 1,
                padding: "16px 24px",
                fontSize: "18px",
                fontWeight: "600",
                cursor: "pointer",
                border: "none",
                borderRadius: "16px 0 0 0",
                backgroundColor: activeTab === "municipios" ? "#3b82f6" : "#f3f4f6",
                color: activeTab === "municipios" ? "white" : "#4b5563",
                transition: "all 0.3s",
                zIndex: 1000,
                position: "relative",
              }}
              onMouseEnter={(e) => {
                if (activeTab !== "municipios") {
                  e.currentTarget.style.backgroundColor = "#e5e7eb"
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== "municipios") {
                  e.currentTarget.style.backgroundColor = "#f3f4f6"
                }
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                <Building2 size={20} />
                <span>Análise por Município</span>
              </div>
            </button>

            <button
              type="button"
              onClick={(e) => handleTabClick("case-sucesso", e)}
              onMouseDown={(e) => handleTabClick("case-sucesso", e)}
              style={{
                flex: 1,
                padding: "16px 24px",
                fontSize: "18px",
                fontWeight: "600",
                cursor: "pointer",
                border: "none",
                borderRadius: "0 16px 0 0",
                backgroundColor: activeTab === "case-sucesso" ? "#10b981" : "#f3f4f6",
                color: activeTab === "case-sucesso" ? "white" : "#4b5563",
                transition: "all 0.3s",
                zIndex: 1000,
                position: "relative",
              }}
              onMouseEnter={(e) => {
                if (activeTab !== "case-sucesso") {
                  e.currentTarget.style.backgroundColor = "#e5e7eb"
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== "case-sucesso") {
                  e.currentTarget.style.backgroundColor = "#f3f4f6"
                }
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                <Award size={20} />
                <span>Case de Sucesso</span>
              </div>
              {activeTab !== "case-sucesso" && (
                <div
                  style={{
                    position: "absolute",
                    top: "8px",
                    right: "8px",
                    width: "12px",
                    height: "12px",
                    backgroundColor: "#10b981",
                    borderRadius: "50%",
                  }}
                ></div>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-6xl mx-auto px-6 pb-16 relative z-10">
        <div className="bg-white rounded-b-2xl border border-gray-200 border-t-0 p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500"></div>

          {activeTab === "municipios" && (
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-4">
                  Análise por Município
                </h2>
                <p className="text-lg text-gray-600">
                  Clique nos cards para ver informações detalhadas de cada município:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {municipalities.map((municipality) => (
                  <MunicipalityCard
                    key={municipality.id}
                    municipality={municipality}
                    isExpanded={expandedCard === municipality.id}
                    onToggle={() => toggleCard(municipality.id)}
                  />
                ))}
              </div>
            </div>
          )}

          {activeTab === "case-sucesso" && (
            <div>
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg hover:bg-green-600 hover:scale-105 transition-all duration-300 cursor-pointer">
                  <Award size={16} />
                  <span>CASE DE SUCESSO</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-2">Tacaratu</h2>
                <p className="text-xl text-gray-600 mb-8">Pernambuco</p>

                <div className="bg-green-500 text-white p-8 rounded-2xl inline-block shadow-2xl hover:bg-green-600 hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="text-4xl font-bold mb-2">R$ 4.650.000</div>
                  <div className="text-lg opacity-90">Já Recuperado com Sucesso</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                <div className="bg-white rounded-xl p-6 text-center shadow-xl border border-gray-100 relative overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-green-500"></div>
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg hover:bg-blue-600 transition-colors duration-300">
                    <Zap className="text-white" size={20} />
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-1 hover:text-blue-700 transition-colors duration-300">
                    59
                  </div>
                  <div className="text-gray-700 font-medium">Aerogeradores</div>
                </div>

                <div className="bg-white rounded-xl p-6 text-center shadow-xl border border-gray-100 relative overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg hover:bg-purple-600 transition-colors duration-300">
                    <Clock className="text-white" size={20} />
                  </div>
                  <div className="text-3xl font-bold text-purple-600 mb-1 hover:text-purple-700 transition-colors duration-300">
                    5
                  </div>
                  <div className="text-gray-700 font-medium">Anos Fiscalizados</div>
                </div>

                <div className="bg-white rounded-xl p-6 text-center shadow-xl border border-gray-100 relative overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg hover:bg-orange-600 transition-colors duration-300">
                    <Scale className="text-white" size={20} />
                  </div>
                  <div className="text-3xl font-bold text-orange-600 mb-1 hover:text-orange-700 transition-colors duration-300">
                    3
                  </div>
                  <div className="text-gray-700 font-medium">Ações Judiciais</div>
                </div>

                <div className="bg-white rounded-xl p-6 text-center shadow-xl border border-gray-100 relative overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500"></div>
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg hover:bg-green-600 transition-colors duration-300">
                    <TrendingUp className="text-white" size={20} />
                  </div>
                  <div className="text-3xl font-bold text-green-600 mb-1 hover:text-green-700 transition-colors duration-300">
                    19%
                  </div>
                  <div className="text-gray-700 font-medium">Já Recuperado</div>
                </div>
              </div>

              <section className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">
                  Situação Financeira
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-xl text-center border border-gray-100 shadow-xl relative overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-pink-500"></div>
                    <div className="text-sm font-semibold text-gray-700 uppercase mb-2">Valor Total Devido</div>
                    <div className="text-3xl font-bold text-red-600 mb-2 hover:text-red-700 transition-colors duration-300">
                      R$ 21.450.000,00
                    </div>
                    <div className="text-gray-600">5 anos de fiscalização</div>
                  </div>

                  <div className="bg-white p-6 rounded-xl text-center border border-gray-100 shadow-xl relative overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500"></div>
                    <div className="text-sm font-semibold text-gray-700 uppercase mb-2">Valor Recuperado</div>
                    <div className="text-3xl font-bold text-green-600 mb-2 hover:text-green-700 transition-colors duration-300">
                      R$ 4.650.000,00
                    </div>
                    <div className="text-gray-600">1º processo concluído</div>
                  </div>

                  <div className="bg-white p-6 rounded-xl text-center border border-gray-100 shadow-xl relative overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-yellow-500"></div>
                    <div className="text-sm font-semibold text-gray-700 uppercase mb-2">Em Andamento</div>
                    <div className="text-3xl font-bold text-orange-600 mb-2 hover:text-orange-700 transition-colors duration-300">
                      R$ 16.800.000,00
                    </div>
                    <div className="text-gray-600">2 processos em tramitação</div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">
                  Status da Ação Judicial
                </h3>

                <div className="bg-white p-6 rounded-xl border border-gray-100 mb-6 shadow-xl relative overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    1 Ação Judicial - 3 Processos de Dívida Ativa
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Valor total:{" "}
                    <span className="font-bold text-blue-600 hover:text-blue-700 transition-colors duration-300">
                      R$ 21.450.000,00
                    </span>
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-6 p-6 bg-white rounded-xl border border-gray-100 shadow-xl relative overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500"></div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors duration-300">
                        <CheckCircle className="text-white" size={20} />
                      </div>
                      <span className="text-xs font-semibold text-green-600 uppercase">Concluído</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-1">1º Processo de Dívida Ativa</h4>
                      <div className="text-2xl font-bold text-green-600 mb-1 hover:text-green-700 transition-colors duration-300">
                        R$ 4.650.000,00
                      </div>
                      <p className="text-gray-700">Valor totalmente recuperado</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 p-6 bg-white rounded-xl border border-gray-100 shadow-xl relative overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-yellow-500"></div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center shadow-lg hover:bg-orange-600 transition-colors duration-300">
                        <Clock className="text-white" size={20} />
                      </div>
                      <span className="text-xs font-semibold text-orange-600 uppercase">Em Andamento</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-1">2º Processo de Dívida Ativa</h4>
                      <div className="text-2xl font-bold text-orange-600 mb-1 hover:text-orange-700 transition-colors duration-300">
                        R$ 8.300.000,00
                      </div>
                      <p className="text-gray-700">Tramitação em curso</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 p-6 bg-white rounded-xl border border-gray-100 shadow-xl relative overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center shadow-lg hover:bg-orange-600 transition-colors duration-300">
                        <Clock className="text-white" size={20} />
                      </div>
                      <span className="text-xs font-semibold text-orange-600 uppercase">Em Andamento</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-1">3º Processo de Dívida Ativa</h4>
                      <div className="text-2xl font-bold text-orange-600 mb-1 hover:text-orange-700 transition-colors duration-300">
                        R$ 8.500.000,00
                      </div>
                      <p className="text-gray-700">Tramitação em curso</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          )}
        </div>
      </div>

      <footer className="bg-gray-900 text-white py-12 shadow-2xl">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-lg font-semibold mb-2">&copy; 2024 Rarotec - Tecnologia para Gestão Pública</p>
          <p className="text-gray-400">Reestruturação Fazendária e Consultoria Tributária</p>
        </div>
      </footer>
    </div>
  )
}

function MunicipalityCard({
  municipality,
  isExpanded,
  onToggle,
}: {
  municipality: any
  isExpanded: boolean
  onToggle: () => void
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 relative">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500"></div>

      <div
        className="bg-blue-500 text-white p-6 cursor-pointer relative mt-1 hover:bg-blue-600 transition-colors duration-300"
        onClick={onToggle}
      >
        <h3 className="text-lg font-bold mb-1">{municipality.name}</h3>
        <p className="text-blue-100 mb-4">{municipality.state}</p>
        <ChevronDown
          className={`absolute right-4 top-1/2 transform -translate-y-1/2 transition-transform duration-300 ${
            isExpanded ? "rotate-180" : ""
          }`}
          size={20}
        />
        <div className="text-xs text-blue-200 absolute bottom-3 right-6">Clique para expandir</div>
      </div>

      {isExpanded && (
        <div className="p-6">
          <div className="text-center mb-6 p-4 bg-blue-50 rounded-lg border border-blue-100 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="text-4xl font-bold text-blue-600 mb-2 hover:text-blue-700 transition-colors duration-300">
              {municipality.turbines}
            </div>
            <div className="text-sm text-gray-700 font-semibold uppercase">Aerogeradores</div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-green-50 p-4 rounded-lg border border-green-100 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="text-xs text-gray-600 font-semibold uppercase mb-1">Recuperação</div>
              <div className="text-lg font-bold text-green-600 hover:text-green-700 transition-colors duration-300">
                {municipality.recovery}
              </div>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg border border-orange-100 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="text-xs text-gray-600 font-semibold uppercase mb-1">Incremento Anual</div>
              <div className="text-lg font-bold text-orange-600 hover:text-orange-700 transition-colors duration-300">
                {municipality.increment}
              </div>
            </div>
          </div>

          {municipality.expansion && (
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <p className="text-sm text-blue-800">
                <strong>Potencial de Expansão:</strong> {municipality.expansion}
              </p>
            </div>
          )}

          <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
            <h4 className="font-bold text-gray-800 mb-4">Detalhamento da Recuperação</h4>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="bg-white p-2 rounded-lg border border-blue-100 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="text-xs font-semibold text-gray-600 mb-1">Instalação</div>
                <div className="text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors duration-300">
                  {municipality.breakdown.installation}
                </div>
              </div>
              <div className="bg-white p-2 rounded-lg border border-green-100 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="text-xs font-semibold text-gray-600 mb-1">Licenças</div>
                <div className="text-sm font-bold text-green-600 hover:text-green-700 transition-colors duration-300">
                  {municipality.breakdown.licenses}
                </div>
              </div>
              <div className="bg-white p-2 rounded-lg border border-purple-100 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="text-xs font-semibold text-gray-600 mb-1">Manutenção</div>
                <div className="text-sm font-bold text-purple-600 hover:text-purple-700 transition-colors duration-300">
                  {municipality.breakdown.maintenance}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

const municipalities = [
  // Rio Grande do Norte - Embaralhados
  {
    id: "joao-camara",
    name: "João Câmara",
    state: "Rio Grande do Norte",
    turbines: 327,
    recovery: "R$ 31.875.000",
    increment: "R$ 3.700.000",
    breakdown: {
      installation: "R$ 17.5M",
      licenses: "R$ 9.5M",
      maintenance: "R$ 4.9M",
    },
  },
  {
    id: "lajes",
    name: "Lajes",
    state: "Rio Grande do Norte",
    turbines: 149,
    recovery: "R$ 17.500.000",
    increment: "R$ 1.700.000",
    breakdown: {
      installation: "R$ 9.5M",
      licenses: "R$ 5.0M",
      maintenance: "R$ 3.0M",
    },
  },
  {
    id: "parazinho",
    name: "Parazinho",
    state: "Rio Grande do Norte",
    turbines: 323,
    recovery: "R$ 31.500.000",
    increment: "R$ 3.600.000",
    breakdown: {
      installation: "R$ 17.3M",
      licenses: "R$ 9.5M",
      maintenance: "R$ 4.7M",
    },
  },
  {
    id: "caicara",
    name: "Caiçara do Rio do Vento",
    state: "Rio Grande do Norte",
    turbines: 120,
    recovery: "R$ 13.100.000",
    increment: "R$ 1.150.000",
    breakdown: {
      installation: "R$ 7.2M",
      licenses: "R$ 3.6M",
      maintenance: "R$ 2.3M",
    },
  },
  {
    id: "sao-miguel-gostoso",
    name: "São Miguel do Gostoso",
    state: "Rio Grande do Norte",
    turbines: 85,
    recovery: "R$ 12.380.000",
    increment: "R$ 1.350.000",
    breakdown: {
      installation: "R$ 6.8M",
      licenses: "R$ 3.7M",
      maintenance: "R$ 1.9M",
    },
  },
  {
    id: "santana-matos",
    name: "Santana do Matos",
    state: "Rio Grande do Norte",
    turbines: 143,
    recovery: "R$ 16.300.000",
    increment: "R$ 1.590.000",
    breakdown: {
      installation: "R$ 8.3M",
      licenses: "R$ 4.5M",
      maintenance: "R$ 3.5M",
    },
  },
  {
    id: "guarame",
    name: "Guaramé",
    state: "Rio Grande do Norte",
    turbines: 106,
    recovery: "R$ 12.900.000",
    increment: "R$ 1.150.000",
    breakdown: {
      installation: "R$ 7.1M",
      licenses: "R$ 3.9M",
      maintenance: "R$ 1.9M",
    },
  },
  {
    id: "pedro-avelino",
    name: "Pedro Avelino",
    state: "Rio Grande do Norte",
    turbines: 70,
    recovery: "R$ 10.100.000",
    increment: "R$ 1.050.000",
    expansion: "Possibilidade de construção de mais 145 aerogeradores",
    breakdown: {
      installation: "R$ 5.1M",
      licenses: "R$ 3.0M",
      maintenance: "R$ 2.0M",
    },
  },
  {
    id: "serra-mel",
    name: "Serra do Mel",
    state: "Rio Grande do Norte",
    turbines: 73,
    recovery: "R$ 11.000.000",
    increment: "R$ 1.100.000",
    breakdown: {
      installation: "R$ 6.0M",
      licenses: "R$ 3.3M",
      maintenance: "R$ 1.7M",
    },
  },
  {
    id: "rio-fogo",
    name: "Rio do Fogo",
    state: "Rio Grande do Norte",
    turbines: 62,
    recovery: "R$ 9.700.000",
    increment: "R$ 1.050.000",
    breakdown: {
      installation: "R$ 5.3M",
      licenses: "R$ 2.9M",
      maintenance: "R$ 1.5M",
    },
  },
  {
    id: "pedra-preta",
    name: "Pedra Preta",
    state: "Rio Grande do Norte",
    turbines: 41,
    recovery: "R$ 7.900.000",
    increment: "R$ 850.000",
    breakdown: {
      installation: "R$ 4.0M",
      licenses: "R$ 2.5M",
      maintenance: "R$ 1.4M",
    },
  },
  {
    id: "jandaira",
    name: "Jandaíra",
    state: "Rio Grande do Norte",
    turbines: 26,
    recovery: "R$ 4.250.000",
    increment: "R$ 4.350.000",
    breakdown: {
      installation: "R$ 2.3M",
      licenses: "R$ 1.3M",
      maintenance: "R$ 650K",
    },
  },
  {
    id: "sao-bento-norte",
    name: "São Bento do Norte",
    state: "Rio Grande do Norte",
    turbines: 15,
    recovery: "R$ 3.100.000",
    increment: "R$ 350.000",
    breakdown: {
      installation: "R$ 1.7M",
      licenses: "R$ 930K",
      maintenance: "R$ 470K",
    },
  },
  {
    id: "fernando-pedrosa",
    name: "Fernando Pedrosa",
    state: "Rio Grande do Norte",
    turbines: 12,
    recovery: "R$ 2.300.000",
    increment: "R$ 280.000",
    expansion: "Possibilidade de construção de mais 60 aerogeradores",
    breakdown: {
      installation: "R$ 1.2M",
      licenses: "R$ 600K",
      maintenance: "R$ 500K",
    },
  },

  // Pernambuco - Embaralhados
  {
    id: "paranatama",
    name: "Paranatama",
    state: "Pernambuco",
    turbines: 202,
    recovery: "R$ 27.550.000",
    increment: "R$ 3.250.000",
    breakdown: {
      installation: "R$ 14.0M",
      licenses: "R$ 8.6M",
      maintenance: "R$ 5.0M",
    },
  },
  {
    id: "caetes",
    name: "Caetés",
    state: "Pernambuco",
    turbines: 103,
    recovery: "R$ 12.100.000",
    increment: "R$ 1.350.000",
    breakdown: {
      installation: "R$ 6.1M",
      licenses: "R$ 3.5M",
      maintenance: "R$ 2.5M",
    },
  },
  {
    id: "saloa",
    name: "Saloá",
    state: "Pernambuco",
    turbines: 75,
    recovery: "R$ 11.110.000",
    increment: "R$ 1.170.000",
    breakdown: {
      installation: "R$ 5.6M",
      licenses: "R$ 3.5M",
      maintenance: "R$ 2.0M",
    },
  },
  {
    id: "pocao",
    name: "Poção",
    state: "Pernambuco",
    turbines: 23,
    recovery: "R$ 3.720.000",
    increment: "R$ 360.000",
    breakdown: {
      installation: "R$ 1.8M",
      licenses: "R$ 1.2M",
      maintenance: "R$ 720K",
    },
  },

  // Sergipe
  {
    id: "barra-coqueiros",
    name: "Barra dos Coqueiros",
    state: "Sergipe",
    turbines: 23,
    recovery: "R$ 3.720.000",
    increment: "R$ 360.000",
    breakdown: {
      installation: "R$ 2.0M",
      licenses: "R$ 1.1M",
      maintenance: "R$ 620K",
    },
  },
]

export default function ProtectedHomePage() {
  return (
    <AuthGuard>
      <HomePage />
    </AuthGuard>
  )
}
