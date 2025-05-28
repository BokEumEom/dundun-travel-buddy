
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowDown, Camera, CheckCircle, Clock } from "lucide-react";
import { useState } from "react";

const Airport = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { id: 1, title: "체크인", description: "항공사 카운터에서 체크인하기", icon: "✅", completed: true },
    { id: 2, title: "수하물 맡기기", description: "큰 가방을 맡기고 영수증 받기", icon: "🛅", completed: false },
    { id: 3, title: "보안검색", description: "금속탐지기 통과하기", icon: "🔍", completed: false },
    { id: 4, title: "출국심사", description: "여권 검사받기", icon: "📘", completed: false },
    { id: 5, title: "게이트 찾기", description: "탑승구 찾아가기", icon: "🚪", completed: false },
    { id: 6, title: "탑승", description: "비행기 타기", icon: "✈️", completed: false }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Button 
          variant="outline" 
          onClick={() => navigate('/')}
          className="text-lg px-6 py-3"
        >
          ← 홈으로
        </Button>
        <h1 className="text-3xl font-bold text-indigo-800">✈️ 공항 도우미</h1>
        <div></div>
      </div>

      {/* Boarding Pass Scanner */}
      <Card className="max-w-2xl mx-auto mb-8 p-6">
        <div className="text-center">
          <Camera className="mx-auto mb-4 h-12 w-12 text-blue-600" />
          <h2 className="text-xl font-bold mb-2">항공권 정보 등록</h2>
          <Button className="w-full h-14 text-lg bg-blue-600 hover:bg-blue-700">
            📱 항공권 사진 찍기
          </Button>
          <p className="text-sm text-gray-600 mt-2">
            항공권을 촬영하면 자동으로 일정을 분석해드려요
          </p>
        </div>
      </Card>

      {/* Progress Steps */}
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          공항 이용 단계
        </h2>
        
        {steps.map((step, index) => (
          <Card 
            key={step.id} 
            className={`mb-4 p-6 border-2 ${
              step.id === currentStep 
                ? 'border-blue-500 bg-blue-50' 
                : step.completed 
                  ? 'border-green-300 bg-green-50' 
                  : 'border-gray-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="text-3xl mr-4">{step.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
                  <p className="text-lg text-gray-600">{step.description}</p>
                </div>
              </div>
              
              {step.completed && (
                <CheckCircle className="h-8 w-8 text-green-600" />
              )}
              
              {step.id === currentStep && (
                <Clock className="h-8 w-8 text-blue-600" />
              )}
            </div>
            
            {step.id === currentStep && (
              <div className="mt-4 pt-4 border-t">
                <Button 
                  className="w-full h-12 text-lg bg-blue-600 hover:bg-blue-700"
                  onClick={() => setCurrentStep(currentStep + 1)}
                >
                  ✅ 이 단계 완료했어요
                </Button>
              </div>
            )}
          </Card>
        ))}
      </div>

      {/* Current Status */}
      <Card className="max-w-2xl mx-auto mt-8 p-6 bg-yellow-50 border-yellow-200">
        <div className="text-center">
          <h3 className="text-xl font-bold text-yellow-800 mb-2">
            현재 상황: {steps[currentStep - 1]?.title}
          </h3>
          <p className="text-lg text-yellow-700">
            {steps[currentStep - 1]?.description}
          </p>
          
          <Button 
            className="mt-4 bg-yellow-600 hover:bg-yellow-700 text-white"
            onClick={() => navigate('/companion')}
          >
            🤔 모르겠어요, AI에게 물어보기
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Airport;
