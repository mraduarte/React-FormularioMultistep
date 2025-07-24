import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";
import "./ReviewForm.css";

type ReviewFormProps = {
  data: {
    review: string;
    comment: string;
  };
  updateFieldHandler: (field: string, value: string) => void;
};

type ReviewOption = {
  value: string;
  label: string;
  icon: React.ReactElement;
};

const reviewOptions: ReviewOption[] = [
  {
    value: "unsatisfied",
    label: "Insatisfeito",
    icon: <BsFillEmojiFrownFill />,
  },
  {
    value: "neutral",
    label: "Neutro",
    icon: <BsFillEmojiNeutralFill />,
  },
  {
    value: "satisfied",
    label: "Satisfeito",
    icon: <BsFillEmojiSmileFill />,
  },
  {
    value: "very_satisfied",
    label: "Muito satisfeito",
    icon: <BsFillEmojiHeartEyesFill />,
  },
];

const ReviewRadioGroup = ({
  selected,
  onChange,
}: {
  selected: string;
  onChange: (value: string) => void;
}) => (
  <div className="form-control score-container">
    {reviewOptions.map((option) => (
      <label className="radio-container" key={option.value}>
        <input
          type="radio"
          value={option.value}
          name="review"
          required
          checked={selected === option.value}
          onChange={() => onChange(option.value)}
        />
        {option.icon}
        <p>{option.label}</p>
      </label>
    ))}
  </div>
);

const CommentField = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) => (
  <div className="form-control">
    <label htmlFor="comment">Comentário:</label>
    <textarea
      name="comment"
      id="comment"
      placeholder="Conte como foi a sua experiência com o produto..."
      required
      value={value || ""}
      onChange={(e) => onChange(e.target.value)}
    ></textarea>
  </div>
);

const ReviewForm = ({ data, updateFieldHandler }: ReviewFormProps) => {
  return (
    <div className="review-form">
      <ReviewRadioGroup
        selected={data.review}
        onChange={(value) => updateFieldHandler("review", value)}
      />
      <CommentField
        value={data.comment}
        onChange={(value) => updateFieldHandler("comment", value)}
      />
    </div>
  );
};

export default ReviewForm;
