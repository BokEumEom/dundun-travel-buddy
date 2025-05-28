
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { MessageCircle, Mic, Send, Heart } from "lucide-react";
import { useState } from "react";

const Companion = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [chatHistory, setChatHistory] = useState([
    {
      type: "ai",
      message: "안녕하세요! 든든여행 AI입니다. 여행 중 궁금한 것이나 불안한 것이 있으시면 언제든 말씀해주세요. 😊",
      time: "지금"
    },
    {
      type: "user", 
      message: "지금 공항에서 길을 잃었어요. 무서워요.",
      time: "방금 전"
    },
    {
      type: "ai",
      message: "걱정하지 마세요! 처음이라 당연히 어려우실 거예요. 차근차근 도와드릴게요. 먼저 주변에 안내데스크나 직원이 보이시나요? 아니면 현재 보이는 간판이나 표지판을 사진으로 찍어서 보여주세요. 금방 해결될 거예요! 💪",
      time: "방금 전"
    }
  ]);

  const quickQuestions = [
    "지금 뭐하죠?",
    "무서워요",
    "길을 잃었어요",
    "어떻게 가야 하나요?",
    "이게 맞나요?",
    "도와주세요"
  ];

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const newMessage = {
      type: "user" as const,
      message: message,
      time: "방금 전"
    };

    setChatHistory(prev => [...prev, newMessage]);
    
    // AI Response simulation
    setTimeout(() => {
      const aiResponse = {
        type: "ai" as const,
        message: getAIResponse(message),
        time: "방금 전"
      };
      setChatHistory(prev => [...prev, aiResponse]);
    }, 1000);

    setMessage("");
  };

  const getAIResponse = (userMessage: string) => {
    if (userMessage.includes("무서") || userMessage.includes("떨")) {
      return "괜찮아요, 처음이니까 떨리는 게 당연해요. 깊게 숨을 쉬시고, 천천히 해보세요. 제가 옆에서 도와드릴게요. 지금 어디에 계신가요? 🤗";
    } else if (userMessage.includes("길") || userMessage.includes("잃")) {
      return "걱정 마세요! 길 찾는 건 금방이에요. 주변에 보이는 간판이나 표지판을 사진으로 찍어서 보여주시면 위치를 파악해드릴게요. 📍";
    } else if (userMessage.includes("뭐하") || userMessage.includes("어떻게")) {
      return "지금 상황을 자세히 말씀해주시면 단계별로 안내해드릴게요. 공항이신가요, 아니면 다른 곳이신가요? 🤔";
    } else {
      return "네, 잘 들었어요! 더 자세히 설명해주시면 구체적으로 도와드릴 수 있어요. 사진이나 음성 메시지로도 보내주셔도 좋아요. 😊";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-100 p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Button 
          variant="outline" 
          onClick={() => navigate('/')}
          className="text-lg px-6 py-3"
        >
          ← 홈으로
        </Button>
        <h1 className="text-3xl font-bold text-orange-800">🤖 AI 도우미</h1>
        <div></div>
      </div>

      {/* AI Status */}
      <Card className="max-w-2xl mx-auto mb-6 p-4 bg-green-50 border-green-200">
        <div className="flex items-center justify-center">
          <Heart className="mr-2 h-6 w-6 text-red-500" />
          <span className="text-lg font-medium text-green-800">
            AI가 24시간 함께합니다
          </span>
        </div>
      </Card>

      {/* Chat Interface */}
      <Card className="max-w-2xl mx-auto mb-6 p-4 h-96 overflow-y-auto">
        <div className="space-y-4">
          {chatHistory.map((chat, index) => (
            <div
              key={index}
              className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                  chat.type === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-800'
                }`}
              >
                <p className="text-lg">{chat.message}</p>
                <p className={`text-xs mt-1 ${
                  chat.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                }`}>
                  {chat.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Quick Questions */}
      <Card className="max-w-2xl mx-auto mb-6 p-4">
        <h3 className="text-lg font-bold mb-3 text-center">빠른 질문</h3>
        <div className="grid grid-cols-2 gap-2">
          {quickQuestions.map((question, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-12 text-sm"
              onClick={() => setMessage(question)}
            >
              {question}
            </Button>
          ))}
        </div>
      </Card>

      {/* Message Input */}
      <Card className="max-w-2xl mx-auto p-4">
        <div className="flex gap-2">
          <Input
            placeholder="궁금한 것을 물어보세요..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            className="h-12 text-lg flex-1"
          />
          <Button
            className={`h-12 px-4 ${
              isListening 
                ? 'bg-red-600 hover:bg-red-700' 
                : 'bg-orange-600 hover:bg-orange-700'
            }`}
            onClick={() => setIsListening(!isListening)}
          >
            <Mic className="h-5 w-5" />
          </Button>
          <Button
            onClick={handleSendMessage}
            className="h-12 px-4 bg-blue-600 hover:bg-blue-700"
            disabled={!message.trim()}
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </Card>

      {/* Help Categories */}
      <div className="max-w-2xl mx-auto mt-8 grid grid-cols-2 gap-4">
        <Card 
          className="p-4 text-center border-2 border-blue-200 hover:border-blue-400 cursor-pointer"
          onClick={() => navigate('/airport')}
        >
          <div className="text-2xl mb-2">✈️</div>
          <p className="font-medium">공항 도움</p>
        </Card>
        
        <Card 
          className="p-4 text-center border-2 border-green-200 hover:border-green-400 cursor-pointer"
          onClick={() => navigate('/transport')}
        >
          <div className="text-2xl mb-2">🚇</div>
          <p className="font-medium">이동 도움</p>
        </Card>
        
        <Card 
          className="p-4 text-center border-2 border-purple-200 hover:border-purple-400 cursor-pointer"
          onClick={() => navigate('/translate')}
        >
          <div className="text-2xl mb-2">💬</div>
          <p className="font-medium">번역 도움</p>
        </Card>
        
        <Card className="p-4 text-center border-2 border-red-200">
          <div className="text-2xl mb-2">🆘</div>
          <p className="font-medium">긴급 상황</p>
        </Card>
      </div>
    </div>
  );
};

export default Companion;
