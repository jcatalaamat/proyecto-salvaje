// deno-lint-ignore-file
/* eslint-disable */
// biome-ignore: needed import
import type { OneRouter } from 'one'

declare module 'one' {
  export namespace OneRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/_sitemap` | `/components/CommunitySection` | `/components/EducationSection` | `/components/Footer` | `/components/Hero` | `/components/HeroSection` | `/components/IndigenousStewardshipSection` | `/components/JoinSection` | `/components/LandSection` | `/components/LocationSection` | `/components/MotionConfig` | `/components/Navbar` | `/components/OurVision` | `/components/ProgramsSection` | `/components/Todo` | `/components/Vision` | `/components/VisionSection` | `/hooks/useClientMotion` | `/utils/cn`
      DynamicRoutes: never
      DynamicRouteTemplate: never
      IsTyped: true
    }
  }
}