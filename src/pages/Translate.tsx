
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Mic, MicOff, Camera, Volume2 } from "lucide-react";
import { useState } from "react";

const Translate = () => {
  const navigate = useNavigate();
  const [isRecording, setIsRecording] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [currentTranslation, setCurrentTranslation] = useState("");
  const [translationHistory, setTranslationHistory] = useState([
    { korean: "안녕하세요", foreign: "こんにちは", type: "speak" },
    { korean: "화장실이 어디에 있나요?", foreign: "トイレはどこですか？", type: "speak" }
  ]);

  const quickPhrases = [
    { korean: "안녕하세요", foreign: "こんにちは" },
    { korean: "감사합니다", foreign: "ありがとうございます" },
    { korean: "죄송합니다", foreign: "すみません" },
    { korean: "화장실이 어디에 있나요?", foreign: "トイレはどこですか？" },
    { korean: "얼마예요?", foreign: "いくらですか？" },
    { korean: "도와주세요", foreign: "助けてください" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Button 
          variant="outline" 
          onClick={() => navigate('/')}
          className="text-lg px-6 py-3"
        >
          ← 홈으로
        </Button>
        <h1 className="text-3xl font-bold text-purple-800">💬 말 통역</h1>
        <div></div>
      </div>

      {/* Main Translation Interface */}
      <Card className="max-w-2xl mx-auto mb-8 p-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">음성 통역</h2>
          <p className="text-lg text-gray-600">버튼을 눌러 말씀하세요</p>
        </div>

        {/* Translation Display */}
        {currentTranslation && (
          <Card className="mb-6 p-4 bg-blue-50 border-blue-200">
            <div className="text-center">
              <p className="text-xl font-bold text-blue-800 mb-2">번역 결과</p>
              <p className="text-2xl text-gray-800">{currentTranslation}</p>
              <Button 
                className="mt-2"
                variant="outline"
                onClick={() => {/* Play audio */}}
              >
                <Volume2 className="mr-2 h-4 w-4" />
                소리로 듣기
              </Button>
            </div>
          </Card>
        )}

        {/* Voice Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Button
            className={`h-20 text-xl font-bold ${
              isRecording 
                ? 'bg-red-600 hover:bg-red-700' 
                : 'bg-green-600 hover:bg-green-700'
            }`}
            onClick={() => {
              setIsRecording(!isRecording);
              setCurrentTranslation(isRecording ? "" : "こんにちは");
            }}
          >
            {isRecording ? (
              <>
                <MicOff className="mr-2 h-8 w-8" />
                🛑 녹음 중지
              </>
            ) : (
              <>
                <Mic className="mr-2 h-8 w-8" />
                🗣️ 한국어로 말하기
              </>
            )}
          </Button>

          <Button
            className={`h-20 text-xl font-bold ${
              isListening 
                ? 'bg-red-600 hover:bg-red-700' 
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
            onClick={() => {
              setIsListening(!isListening);
              setCurrentTranslation(isListening ? "" : "안녕하세요");
            }}
          >
            {isListening ? (
              <>
                <MicOff className="mr-2 h-8 w-8" />
                🛑 듣기 중지
              </>
            ) : (
              <>
                <Mic className="mr-2 h-8 w-8" />
                👂 상대방 말 듣기
              </>
            )}
          </Button>
        </div>
      </Card>

      {/* Camera Translation */}
      <Card className="max-w-2xl mx-auto mb-8 p-6">
        <div className="text-center">
          <Camera className="mx-auto mb-4 h-12 w-12 text-purple-600" />
          <h2 className="text-xl font-bold mb-2">카메라 번역</h2>
          <p className="text-lg text-gray-600 mb-4">
            간판이나 메뉴판을 촬영하면 번역해드려요
          </p>
          <Button className="w-full h-14 text-lg bg-purple-600 hover:bg-purple-700">
            📱 사진으로 번역하기
          </Button>
        </div>
      </Card>

      {/* Quick Phrases */}
      <Card className="max-w-2xl mx-auto mb-8 p-6">
        <h2 className="text-xl font-bold text-center mb-4">자주 쓰는 표현</h2>
        <div className="grid grid-cols-1 gap-3">
          {quickPhrases.map((phrase, index) => (
            <Card 
              key={index}
              className="p-4 border hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => setCurrentTranslation(phrase.foreign)}
            >
              <div className="text-center">
                <p className="text-lg font-bold text-gray-800">{phrase.korean}</p>
                <p className="text-lg text-blue-600">{phrase.foreign}</p>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Translation History */}
      <Card className="max-w-2xl mx-auto p-6">
        <h2 className="text-xl font-bold text-center mb-4">번역 기록</h2>
        <div className="space-y-3">
          {translationHistory.map((item, index) => (
            <Card key={index} className="p-3 bg-gray-50">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{item.korean}</p>
                  <p className="text-blue-600">{item.foreign}</p>
                </div>
                <Button 
                  size="sm"
                  variant="outline"
                  onClick={() => setCurrentTranslation(item.foreign)}
                >
                  다시 사용
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Translate;
