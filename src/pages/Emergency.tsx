
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Phone, MapPin, MessageCircle } from "lucide-react";

const Emergency = () => {
  const navigate = useNavigate();

  const emergencyContacts = [
    { name: "경찰서", number: "110", icon: "🚔", description: "범죄신고, 도난" },
    { name: "소방서", number: "119", icon: "🚒", description: "화재, 응급의료" },
    { name: "한국영사관", number: "+81-3-3452-7611", icon: "🏛️", description: "여권분실, 영사서비스" },
    { name: "관광핫라인", number: "050-3816-2787", icon: "ℹ️", description: "관광정보, 통역지원" }
  ];

  const quickPhrases = [
    { korean: "도와주세요!", japanese: "助けてください！", english: "Help me!" },
    { korean: "응급상황입니다", japanese: "緊急事態です", english: "This is an emergency" },
    { korean: "병원에 가야 해요", japanese: "病院に行く必要があります", english: "I need to go to hospital" },
    { korean: "길을 잃었어요", japanese: "道に迷いました", english: "I'm lost" },
    { korean: "지갑을 잃어버렸어요", japanese: "財布をなくしました", english: "I lost my wallet" },
    { korean: "여권을 잃어버렸어요", japanese: "パスポートをなくしました", english: "I lost my passport" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Button 
          variant="outline" 
          onClick={() => navigate('/')}
          className="text-lg px-6 py-3"
        >
          ← 홈으로
        </Button>
        <h1 className="text-3xl font-bold text-red-800">🆘 긴급 도움</h1>
        <div></div>
      </div>

      {/* Emergency Alert */}
      <Card className="max-w-2xl mx-auto mb-8 p-6 bg-red-100 border-red-300">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-800 mb-2">
            🚨 위급한 상황이신가요?
          </h2>
          <p className="text-lg text-red-700 mb-4">
            침착하게 아래 번호로 전화하시거나 주변 사람에게 도움을 요청하세요
          </p>
          <Button 
            className="w-full h-16 text-xl font-bold bg-red-600 hover:bg-red-700 text-white"
            onClick={() => window.open('tel:110')}
          >
            📞 즉시 경찰서 연결 (110)
          </Button>
        </div>
      </Card>

      {/* Emergency Contacts */}
      <div className="max-w-2xl mx-auto mb-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          긴급 연락처
        </h2>
        
        {emergencyContacts.map((contact, index) => (
          <Card key={index} className="mb-4 p-6 border-2 border-gray-200 hover:border-red-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="text-3xl mr-4">{contact.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{contact.name}</h3>
                  <p className="text-lg text-gray-600">{contact.description}</p>
                  <p className="text-2xl font-bold text-blue-600">{contact.number}</p>
                </div>
              </div>
              <Button
                className="bg-green-600 hover:bg-green-700 text-white h-12 px-6"
                onClick={() => window.open(`tel:${contact.number}`)}
              >
                <Phone className="mr-2 h-5 w-5" />
                전화걸기
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Quick Emergency Phrases */}
      <Card className="max-w-2xl mx-auto mb-8 p-6">
        <h2 className="text-xl font-bold text-center mb-4">긴급 상황 표현</h2>
        <p className="text-center text-gray-600 mb-4">
          주변 사람에게 이 문구들을 보여주세요
        </p>
        
        <div className="space-y-3">
          {quickPhrases.map((phrase, index) => (
            <Card key={index} className="p-4 bg-yellow-50 border-yellow-200">
              <div className="text-center">
                <p className="text-lg font-bold text-gray-800 mb-1">{phrase.korean}</p>
                <p className="text-2xl font-bold text-red-600 mb-1">{phrase.japanese}</p>
                <p className="text-lg text-blue-600">{phrase.english}</p>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Location & Other Help */}
      <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-6 border-2 border-blue-200">
          <div className="text-center">
            <MapPin className="mx-auto mb-2 h-10 w-10 text-blue-600" />
            <h3 className="font-bold text-lg mb-2">현재 위치 공유</h3>
            <p className="text-gray-600 mb-4">가족이나 친구에게 현재 위치를 전송해요</p>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              📍 위치 공유하기
            </Button>
          </div>
        </Card>

        <Card className="p-6 border-2 border-purple-200">
          <div className="text-center">
            <MessageCircle className="mx-auto mb-2 h-10 w-10 text-purple-600" />
            <h3 className="font-bold text-lg mb-2">AI 긴급 도움</h3>
            <p className="text-gray-600 mb-4">AI가 상황을 분석하고 도움을 드려요</p>
            <Button 
              className="w-full bg-purple-600 hover:bg-purple-700"
              onClick={() => navigate('/companion')}
            >
              🤖 AI에게 도움 요청
            </Button>
          </div>
        </Card>
      </div>

      {/* Important Notice */}
      <Card className="max-w-2xl mx-auto mt-8 p-6 bg-yellow-50 border-yellow-200">
        <div className="text-center">
          <h3 className="text-xl font-bold text-yellow-800 mb-2">
            💡 중요 안내
          </h3>
          <div className="text-left text-yellow-700 space-y-2">
            <p>• 생명이 위험한 상황: 즉시 119 (소방서) 신고</p>
            <p>• 범죄 피해: 즉시 110 (경찰서) 신고</p>
            <p>• 여권 분실: 한국영사관 연락</p>
            <p>• 언어 문제: 관광핫라인에서 통역 지원</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Emergency;
