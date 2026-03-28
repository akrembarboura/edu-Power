import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import reviewsData from "./reviewsData"; // ✅ import the array

const Review = () => {
  return (
    <section id="reviews">
      <Box sx={{ backgroundColor: "#f8f9ff", py: 8, px: { xs: 2, md: 6 } }}>

        {/* ── Section Header ── */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="overline"
            sx={{ color: "#4070EF", fontWeight: 700, letterSpacing: 3, fontSize: "0.75rem" }}
          >
            Student Reviews
          </Typography>

          <Typography variant="h4" fontWeight={800} sx={{ mt: 1, mb: 2, color: "#1a1a2e" }}>
            Each and every client is important
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: "text.secondary", maxWidth: 560, mx: "auto", lineHeight: 1.8 }}
          >
            Discover what our students are saying! Real feedback from learners
            who have experienced and benefited from our courses.
          </Typography>

          {/* Overall Rating Summary */}
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1.5,
              mt: 3,
              backgroundColor: "#fff",
              px: 3,
              py: 1.5,
              borderRadius: 99,
              boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
            }}
          >
            <Rating value={4.8} precision={0.1} readOnly size="small" />
            <Typography fontWeight={700} color="#1a1a2e">4.8</Typography>
            <Typography variant="body2" color="text.secondary">
              {/* ✅ reviewsData.length — not reviews.length */}
              from {reviewsData.length * 600}+ students
            </Typography>
          </Box>
        </Box>

        {/* ── Review Cards Grid ── */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "1fr 1fr 1fr" },
            gap: 3,
            maxWidth: 1100,
            mx: "auto",
          }}
        >
          {/* ✅ reviewsData.map — not reviews.map */}
          {reviewsData.map((item) => (
            <Card
              key={item.id}
              sx={{
                borderRadius: 3,
                boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
                border: "1px solid #eef0ff",
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 8px 28px rgba(0,0,0,0.12)",
                },
              }}
            >
              <CardContent sx={{ p: 3 }}>
                {/* ⭐ Star Rating */}
                <Rating value={item.rating} readOnly size="small" sx={{ mb: 1.5 }} />

                {/* Review Text */}
                <Typography
                  variant="body2"
                  sx={{ color: "#444", lineHeight: 1.85, mb: 2.5, minHeight: 80, fontStyle: "italic" }}
                >
                  "{item.review}"
                </Typography>

                {/* Course Tag */}
                <Box
                  sx={{
                    display: "inline-block",
                    backgroundColor: "#eef0ff",
                    color: "#4070EF",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    px: 1.5,
                    py: 0.4,
                    borderRadius: 99,
                    mb: 2,
                    letterSpacing: 0.5,
                  }}
                >
                  📚 {item.course}
                </Box>

                {/* Divider + Avatar */}
                <Box sx={{ borderTop: "1px solid #f0f0f0", pt: 2 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <Avatar
                      sx={{
                        backgroundColor: item.avatarColor,
                        width: 40,
                        height: 40,
                        fontWeight: 700,
                        fontSize: "1rem",
                      }}
                    >
                      {item.avatar}
                    </Avatar>
                    <Box>
                      <Typography variant="body2" fontWeight={700} color="#1a1a2e">
                        {item.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {item.role} · {item.date}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </section>
  );
};

export default Review;