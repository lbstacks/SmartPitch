import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { CvInfoContext } from "@/context/CvInfoContext";
import { Loader, WandSparklesIcon } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import GlobalApi from "../../../../../../../server/GlobalApi";
import { AIchat } from "../../../../../../../server/GeminiAPI";
import { toast } from "sonner";
import { useParams } from "react-router-dom";

const prompt =
  "Generate a JSON-formatted resume or carriculum vitae summary for {jobTitle} with fields experience_level and summary, providing a tailored description for three experience tiers: beginner (0-2 years), mid-level (3-5 years), and experienced (6+ years), with each summary consisting of 5-6 lines highlighting the relevant expertise and competencies expected at each level";

function Summary({ enabledNext }) {
  const { cvInfo, setCvInfo } = useContext(CvInfoContext);
  const [summary, setSummary] = useState();
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const [aiSummaryList, setAiSummaryList] = useState([]);

  useEffect(() => {
    summary &&
      setCvInfo({
        ...cvInfo,
        summary: summary,
      });
  }, [summary]);

  const GenerateSummary = async () => {
    setLoading(true);
    const PROMPT = prompt.replace("{jobTitle}", cvInfo?.jobTitle);
    console.log(PROMPT);

    try {
      const result = await AIchat.sendMessage(PROMPT);

      const responseText = await result.response.text();
      console.log("Raw Response:", responseText);

      const formattedResponse = `[${responseText}]`;
      console.log("Formatted JSON Array:", formattedResponse);

      const parsedResponse = JSON.parse(formattedResponse);
      setAiSummaryList(parsedResponse);
    } catch (error) {
      console.error("Error parsing JSON response:", error);
      toast.error("Failed to generate summary. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const onSave = (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      data: {
        summary: summary,
      },
    };
    GlobalApi.UpdateCvDetail(params?.cvId, data).then(
      (res) => {
        console.log(res);
        enabledNext(true);
        setLoading(false);
        toast.success("Summary updated 🎉✨");
      },
      (error) => {
        setLoading(false);
      }
    );
  };

  return (
    <div className="max-w-full">
      <div className="p-4 sm:p-5 md:p-6 shadow-lg border-t-primary border-t-4 mt-6 sm:mt-10 rounded-lg">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold">Summary</h2>
        <p className="text-sm sm:text-base text-gray-600 mb-4 max-w-prose">
          What's your profile like? Tell us about it!
        </p>

        <form className="mt-5 w-full" onSubmit={onSave}>
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 sm:gap-4">
            <label className="text-sm sm:text-base">Add Summary</label>
            <Button
              onClick={() => GenerateSummary()}
              type="button"
              variant="outline"
              size="sm"
              className="border-primary text-primary whitespace-nowrap"
            >
              <WandSparklesIcon className="w-4 h-4 mr-2" />
              Spark it Up
            </Button>
          </div>
          <Textarea
            className="mt-5 w-full min-h-[150px]"
            required
            value={summary}
            defaultValue={summary ? summary : cvInfo?.summary}
            onChange={(e) => setSummary(e.target.value)}
          />

          <div className="flex justify-end mt-5">
            <Button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto"
            >
              {loading ? <Loader className="animate-spin" /> : "Save"}
            </Button>
          </div>
        </form>
      </div>

      {aiSummaryList && (
        <div className="my-10 p-4 sm:p-5 md:p-6 shadow-lg border-t-primary border-t-4 rounded-lg">
          <h2 className="font-bold text-sm sm:text-base md:text-lg">
            Suggested Summary
          </h2>
          <div className="grid gap-4 mt-4">
            {aiSummaryList.map((item, index) => (
              <div
                key={index}
                onClick={() => setSummary(item?.summary)}
                className="p-4 sm:p-5 shadow-lg rounded-lg cursor-pointer hover:shadow-xl transition-shadow"
              >
                <h2 className="font-bold my-1 text-primary text-sm sm:text-base">
                  Level: {item?.experience_level}
                </h2>
                <p className="text-sm sm:text-base">{item?.summary}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Summary;
