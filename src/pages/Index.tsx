
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Plane, Navigation, MessageCircle, Headphones } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      {/* Header */}
      <div className="text-center mb-8 pt-6">
        <h1 className="text-4xl font-bold text-indigo-800 mb-2">✈️ 든든여행</h1>
        <p className="text-xl text-indigo-600">AI가 함께하는 안심 해외여행</p>
      </div>

      {/* Main Menu */}
      <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Airport Assistant */}
        <Card className="p-8 hover:shadow-lg transition-shadow cursor-pointer border-2 border-blue-200 hover:border-blue-400"
              onClick={() => navigate('/airport')}>
          <div className="text-center">
            <Plane className="mx-auto mb-4 h-16 w-16 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">공항 도우미</h2>
            <p className="text-lg text-gray-600">체크인부터 탑승까지<br />단계별 안내</p>
          </div>
        </Card>

        {/* Transportation Assistant */}
        <Card className="p-8 hover:shadow-lg transition-shadow cursor-pointer border-2 border-green-200 hover:border-green-400"
              onClick={() => navigate('/transport')}>
          <div className="text-center">
            <Navigation className="mx-auto mb-4 h-16 w-16 text-green-600" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">이동 도우미</h2>
            <p className="text-lg text-gray-600">택시·버스·지하철<br />이용법 안내</p>
          </div>
        </Card>

        {/* Translation */}
        <Card className="p-8 hover:shadow-lg transition-shadow cursor-pointer border-2 border-purple-200 hover:border-purple-400"
              onClick={() => navigate('/translate')}>
          <div className="text-center">
            <MessageCircle className="mx-auto mb-4 h-16 w-16 text-purple-600" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">말 통역</h2>
            <p className="text-lg text-gray-600">음성·텍스트<br />양방향 통역</p>
          </div>
        </Card>

        {/* AI Companion */}
        <Card className="p-8 hover:shadow-lg transition-shadow cursor-pointer border-2 border-orange-200 hover:border-orange-400"
              onClick={() => navigate('/companion')}>
          <div className="text-center">
            <Headphones className="mx-auto mb-4 h-16 w-16 text-orange-600" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">AI 도우미</h2>
            <p className="text-lg text-gray-600">궁금한 것 뭐든지<br />물어보세요</p>
          </div>
        </Card>

      </div>

      {/* Emergency Button */}
      <div className="max-w-2xl mx-auto mt-8">
        <Button 
          className="w-full h-16 text-xl font-bold bg-red-500 hover:bg-red-600 text-white"
          onClick={() => navigate('/emergency')}
        >
          🆘 긴급 도움 요청
        </Button>
      </div>

      {/* Help Text */}
      <div className="text-center mt-8">
        <p className="text-lg text-gray-600">
          처음 가는 해외여행, AI가 옆에서 든든하게 도와줍니다
        </p>
      </div>
    </div>
  );
};

export default Index;
