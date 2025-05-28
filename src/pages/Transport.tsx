
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { MapPin, Camera, Navigation } from "lucide-react";
import { useState } from "react";

const Transport = () => {
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");
  const [showRoute, setShowRoute] = useState(false);

  const transportOptions = [
    {
      type: "택시",
      icon: "🚖",
      description: "가장 편하지만 비용이 높아요",
      time: "15분",
      cost: "약 3만원",
      difficulty: "쉬움",
      color: "yellow"
    },
    {
      type: "지하철",
      icon: "🚇",
      description: "빠르고 저렴해요",
      time: "25분",
      cost: "약 300엔",
      difficulty: "보통",
      color: "blue"
    },
    {
      type: "버스",
      icon: "🚌",
      description: "현지인들이 많이 이용해요",
      time: "35분",
      cost: "약 200엔",
      difficulty: "어려움",
      color: "green"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Button 
          variant="outline" 
          onClick={() => navigate('/')}
          className="text-lg px-6 py-3"
        >
          ← 홈으로
        </Button>
        <h1 className="text-3xl font-bold text-green-800">🚇 이동 도우미</h1>
        <div></div>
      </div>

      {/* Destination Input */}
      <Card className="max-w-2xl mx-auto mb-8 p-6">
        <div className="text-center mb-4">
          <MapPin className="mx-auto mb-2 h-12 w-12 text-green-600" />
          <h2 className="text-xl font-bold">어디로 가시나요?</h2>
        </div>
        
        <div className="space-y-4">
          <Input
            placeholder="목적지를 입력하세요 (예: 도쿄역, 신주쿠)"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="h-14 text-lg"
          />
          
          <div className="grid grid-cols-2 gap-4">
            <Button 
              className="h-12 text-lg bg-green-600 hover:bg-green-700"
              onClick={() => setShowRoute(true)}
            >
              🗺️ 길찾기
            </Button>
            <Button 
              variant="outline"
              className="h-12 text-lg"
            >
              📱 사진으로 찾기
            </Button>
          </div>
        </div>
      </Card>

      {/* Transportation Options */}
      {showRoute && (
        <div className="max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            이동 방법 추천
          </h2>
          
          {transportOptions.map((option, index) => (
            <Card 
              key={index}
              className={`mb-4 p-6 border-2 hover:shadow-lg transition-shadow cursor-pointer
                ${option.color === 'yellow' ? 'border-yellow-300 hover:border-yellow-500' :
                  option.color === 'blue' ? 'border-blue-300 hover:border-blue-500' :
                  'border-green-300 hover:border-green-500'}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="text-4xl mr-4">{option.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{option.type}</h3>
                    <p className="text-lg text-gray-600">{option.description}</p>
                    <div className="flex gap-4 mt-2">
                      <span className="text-sm bg-gray-100 px-2 py-1 rounded">⏰ {option.time}</span>
                      <span className="text-sm bg-gray-100 px-2 py-1 rounded">💰 {option.cost}</span>
                      <span className={`text-sm px-2 py-1 rounded ${
                        option.difficulty === '쉬움' ? 'bg-green-100 text-green-800' :
                        option.difficulty === '보통' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        📊 {option.difficulty}
                      </span>
                    </div>
                  </div>
                </div>
                <Button 
                  className={`${
                    option.color === 'yellow' ? 'bg-yellow-600 hover:bg-yellow-700' :
                    option.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700' :
                    'bg-green-600 hover:bg-green-700'
                  } text-white`}
                >
                  선택
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Help Features */}
      <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-6 border-2 border-purple-200">
          <div className="text-center">
            <Camera className="mx-auto mb-2 h-10 w-10 text-purple-600" />
            <h3 className="font-bold text-lg mb-2">노선도 분석</h3>
            <p className="text-gray-600 mb-4">지하철 노선도를 촬영하면 몇 정거장인지 알려드려요</p>
            <Button className="w-full bg-purple-600 hover:bg-purple-700">
              📱 노선도 촬영하기
            </Button>
          </div>
        </Card>

        <Card className="p-6 border-2 border-indigo-200">
          <div className="text-center">
            <Navigation className="mx-auto mb-2 h-10 w-10 text-indigo-600" />
            <h3 className="font-bold text-lg mb-2">실시간 안내</h3>
            <p className="text-gray-600 mb-4">현재 위치에서 목적지까지 실시간으로 안내해드려요</p>
            <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
              📍 현재 위치 확인
            </Button>
          </div>
        </Card>
      </div>

      {/* Emergency Help */}
      <Card className="max-w-2xl mx-auto mt-8 p-6 bg-orange-50 border-orange-200">
        <div className="text-center">
          <h3 className="text-xl font-bold text-orange-800 mb-2">
            길을 잃으셨나요?
          </h3>
          <p className="text-lg text-orange-700 mb-4">
            걱정하지 마세요. AI가 도와드릴게요.
          </p>
          
          <Button 
            className="bg-orange-600 hover:bg-orange-700 text-white text-lg h-12"
            onClick={() => navigate('/companion')}
          >
            🆘 AI에게 도움 요청하기
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Transport;
