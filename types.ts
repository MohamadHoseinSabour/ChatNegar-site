import React from 'react';
import { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
  size: 'small' | 'medium' | 'large';
  visual?: React.ReactNode;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface RoadmapItem {
  version: string;
  title: string;
  color: string;
  features: string[];
}