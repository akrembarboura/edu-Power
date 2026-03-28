import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import { MdAccessTime, MdPlayLesson, MdPeople } from "react-icons/md";
import { FaStar } from "react-icons/fa";

import { IoBookSharp } from "react-icons/io5";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { IoMdAnalytics } from "react-icons/io";
import { FaChalkboardTeacher } from "react-icons/fa";

const Data = [
  {
    id: 1,
    title: "Digital Library",
    description:
      "Access a wide collection of books, PDFs, and learning materials anytime.",
    icon: <IoBookSharp size={40} />,
    color: "#EF4040",
    bgColor: "#FFDCD1",
    rating: 4.8,        
    sales: 12400,      
    discount: 30,       
    duration: "6h 30m", 
    lessons: 42,        
  },
  {
    id: 2,
    title: "Video Lessons",
    description:
      "Learn through high-quality video tutorials from experienced instructors.",
    icon: <MdOutlineOndemandVideo size={40} />,
    color: "#4070EF",
    bgColor: "#D1E0FF",
    rating: 4.6,
    sales: 9800,
    discount: 20,
    duration: "8h 15m",
    lessons: 58,
  },
  {
    id: 3,
    title: "Progress Tracking",
    description:
      "Monitor your learning journey and track your course completion easily.",
    icon: <IoMdAnalytics size={40} />,
    color: "#20A850",
    bgColor: "#D1FFE2",
    rating: 4.9,
    sales: 5300,
    discount: 15,
    duration: "4h 00m",
    lessons: 30,
  },
  {
    id: 4,
    title: "Expert Instructors",
    description:
      "Learn from professional teachers with real-world experience.",
    icon: <FaChalkboardTeacher size={40} />,
    color: "#A840EF",
    bgColor: "#EDD1FF",
    rating: 4.7,
    sales: 7650,
    discount: 25,
    duration: "10h 45m",
    lessons: 74,
  },
];


export default function CardsGrid() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 3,
        justifyContent: "center",
        padding: 4,
        backgroundColor: "hsl(190, 18%, 13%)",
        minHeight: "40vh",
      }}
    >
      {Data.map((item) => (
        <Card
          key={item.id}
          sx={{
            width: 280,
            borderRadius: 3,
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            transition: "transform 0.2s, box-shadow 0.2s",
            position: "relative",
            "&:hover": {
              transform: "translateY(-6px)",
              boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
            },
          }}
        >
          {/* Discount Badge */}
          <Chip
            label={`-${item.discount}%`}
            size="small"
            sx={{
              position: "absolute",
              top: 12,
              right: 12,
              backgroundColor: item.color,
              color: "#fff",
              fontWeight: 700,
              fontSize: "0.75rem",
              zIndex: 1,
            }}
          />

          {/* Icon Area */}
          <Box
            sx={{
              backgroundColor: item.bgColor,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 120,
              color: item.color,
            }}
          >
            {item.icon}
          </Box>

          <CardContent sx={{ pb: 0 }}>
            {/* Title */}
            <Typography gutterBottom variant="h6" fontWeight={700}>
              {item.title}
            </Typography>

            {/* Description */}
            <Typography variant="body2" sx={{ color: "text.secondary", mb: 1.5 }}>
              {item.description}
            </Typography>

            {/*  Rating +Sales */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5 }}>
              <FaStar color="#FFC107" size={16} />
              <Typography variant="body2" fontWeight={700}>
                {item.rating}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                •
              </Typography>
              <MdPeople color="#888" size={16} />
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {item.sales.toLocaleString()} students
              </Typography>
            </Box>

            <Divider sx={{ mb: 1.5 }} />

            {/*Duration + Lessons */}
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <MdAccessTime color={item.color} size={16} />
                <Typography variant="body2" fontWeight={600}>
                  {item.duration}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <MdPlayLesson color={item.color} size={16} />
                <Typography variant="body2" fontWeight={600}>
                  {item.lessons} lessons
                </Typography>
              </Box>
            </Box>
          </CardContent>

          <CardActions sx={{ px: 2, pb: 2, pt: 1 }}>
            <Button
              variant="contained"
              fullWidth
              size="small"
              sx={{
                backgroundColor: item.color,
                borderRadius: 2,
                fontWeight: 600,
                textTransform: "none",
                "&:hover": { opacity: 0.88, backgroundColor: item.color },
              }}
            >
              Enroll Now
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}