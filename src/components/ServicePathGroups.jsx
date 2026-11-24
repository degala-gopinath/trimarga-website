import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { SERVICES_LIST } from '../data/servicesData';
import { groupByPath, pathStyle } from '../data/paths';

/**
 * The eleven services, grouped into the three paths rather than listed flat.
 *
 * A single grid of eleven identical cards hides the proposition; three named
 * bands make the structure of the offer readable at a glance, and give the
 * path colours something to belong to.
 */
export default function ServicePathGroups({
  headingLevel: Heading = 'h3',
  cardHeadingLevel: CardHeading = 'h4',
  showConsultation = true,
  ctaLabel = 'Explore service'
}) {
  const groups = groupByPath(SERVICES_LIST);

  return (
    <div className="space-y-16">
      {groups.map(({ path, services }) => (
        <section key={path.key} aria-labelledby={`path-${path.key}`}>

          {/* Band header — the rule draws itself in under the title */}
          <div
            className="path-band flex flex-wrap items-baseline gap-x-6 gap-y-3 pb-5"
            style={{ '--card-hue': path.hue, '--card-rgb': path.rgb }}
            data-reveal
          >
            <span
              className="font-display text-[clamp(2.2rem,5vw,3.2rem)] font-semibold leading-none"
              style={{ color: path.hue }}
            >
              {path.num}
            </span>

            <div className="min-w-[14rem] flex-1">
              <Heading
                id={`path-${path.key}`}
                className="font-display text-[clamp(1.4rem,2.6vw,1.9rem)] font-semibold leading-tight text-white"
              >
                {path.label}
              </Heading>

              <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/60">
                {path.promise}
              </p>
            </div>

            <span className="font-mono text-xs uppercase tracking-[0.16em] text-white/35">
              {String(services.length).padStart(2, '0')}{' '}
              {services.length === 1 ? 'service' : 'services'}
            </span>
          </div>

          {/* That path's services */}
          <div className="grid gap-px border border-white/15 bg-white/15 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.slug}`}
                className="spot card-edge group flex flex-col justify-between bg-[#0A0907] p-7 transition-colors hover:bg-[#121009]"
                style={pathStyle(service.category)}
              >
                <div>
                  <div className="flex items-center justify-between text-xs">
                    <span
                      className="card-num font-mono font-bold"
                      style={{ color: 'var(--card-hue)' }}
                    >
                      {service.num}
                    </span>

                    <span className="text-[10px] uppercase tracking-wider text-white/45">
                      {service.category}
                    </span>
                  </div>

                  <CardHeading className="mt-4 text-lg font-bold text-white transition-colors group-hover:[color:var(--card-hue)]">
                    {service.title}
                  </CardHeading>

                  <p className="mt-3 text-sm leading-relaxed text-white/75">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs font-bold uppercase tracking-wider text-white/60 group-hover:[color:var(--card-hue)]">
                  <span>{ctaLabel}</span>
                  <ArrowUpRight className="nudge h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}

      {showConsultation && (
        <Link
          to="/contact"
          className="spot group flex flex-col justify-between gap-6 border border-[#FBAF01] bg-[#FBAF01] p-8 text-[#0A0907] transition-colors hover:bg-[#FFC73D] sm:flex-row sm:items-center"
          data-reveal
        >
          <div>
            <span className="font-mono text-xs font-extrabold uppercase tracking-widest">
              Not sure which path you need?
            </span>

            <p className="mt-3 max-w-xl font-display text-[clamp(1.3rem,2.4vw,1.7rem)] font-semibold leading-snug">
              Tell us about your business and budget.
            </p>

            <p className="mt-2 max-w-xl text-sm font-medium leading-relaxed text-[#0A0907]/80">
              We will recommend the right starting step, with zero obligation.
            </p>
          </div>

          <span className="inline-flex shrink-0 items-center gap-2 text-xs font-extrabold uppercase tracking-wider">
            Get a free consultation
            <ArrowRight className="nudge h-4 w-4" />
          </span>
        </Link>
      )}
    </div>
  );
}
