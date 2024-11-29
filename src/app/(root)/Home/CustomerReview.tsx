"use client";

import { Container } from "@/components/ui/container";
import { H2, H3, Paragraph } from "@/components/ui/typography";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    rating: 5,
    text: "Found my dream job through this platform!",
    position: "Software Engineer",
  },
  {
    id: 2,
    name: "Jane Smith",
    rating: 4,
    text: "Great selection of gigs, very user-friendly.",
    position: "Freelance Designer",
  },
  {
    id: 3,
    name: "Mike Johnson",
    rating: 5,
    text: "Excellent support team, always helpful.",
    position: "Marketing Specialist",
  },
];

export function CustomerReviews() {
  return (
    <section className="py-16">
      <Container>
        <H2 className="text-center mb-12">What Our Users Say</H2>
        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((review) => (
            <Card key={review.id} className="bg-background">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < review.rating
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <Paragraph className="mb-4 italic">
                  &ldquo;{review.text}&rdquo;
                </Paragraph>
                <H3 className="font-semibold text-lg">{review.name}</H3>
                <Paragraph className="text-muted-foreground">
                  {review.position}
                </Paragraph>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
