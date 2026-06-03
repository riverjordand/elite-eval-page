import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/landing/FooterSection";

const LiabilityWaiver = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 border-b border-border/10">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-primary" />
            <span className="font-oswald text-[10px] text-accent uppercase tracking-[0.4em]">Legal</span>
          </div>
          <h1 className="font-bebas text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.88] mb-4">
            Liability <span className="text-primary">Waiver</span>
          </h1>
          <p className="font-oswald text-sm text-foreground/30 uppercase tracking-wider">
            Please read carefully before signing
          </p>
        </div>
      </section>

      {/* Waiver Copy */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6 lg:px-16 max-w-4xl space-y-8">
          <p className="text-center text-sm text-foreground/40 italic font-oswald uppercase tracking-wider">(scroll down to e-sign form)</p>

          <h2 className="font-bebas text-3xl md:text-4xl text-primary uppercase text-center">Waiver of Liability</h2>

          <p className="text-sm md:text-base text-foreground/70 leading-relaxed font-oswald uppercase tracking-wide font-bold text-center">
            Please read carefully before signing as this agreement provides for a release of liability, waiver of certain rights, and assumption of risks and indemnity.
          </p>

          <div className="space-y-6 text-sm md:text-base text-foreground/60 leading-relaxed">
            <p>
              In consideration of being permitted to use today, and on all future dates, the facilities, gym, weight room, exercise room, training services, and equipment of any kind or nature provided by LEGENDARY PREP ACADEMY, LLC, an Arizona limited liability company ("LPA"), I, for myself, my heirs, personal representatives or assigns, minors of whom I am the parent or guardian or have responsibility for, and players, coaches, or other guests accompanying me, whether or not they make use of the facilities, training service, or equipment (collectively the "PARTICIPANTS"), <strong className="text-foreground/80">DO HEREBY COVENANT NOT TO SUE LPA OR ANY OF ITS MEMBERS, AGENTS, DIRECTORS, OFFICERS, EMPLOYEES, AFFILIATES, PARTNERS, SPONSORS, VOLUNTEERS, CONTRACTORS, CONTRACTED ENTITIES AND FACILITIES, AND THE OWNERS AND LESSORS THEREOF (COLLECTIVELY, THE "LPA PARTIES"), AND, FURTHER DO HEREBY RELEASE, WAIVE, DISCHARGE FROM ALL LIABILITY LPA AND THE LPA PARTIES FROM AND FOR ANY AND ALL CLAIMS, INCLUDING CLAIMS RELATED TO ALLEGED NEGLIGENCE OR BREACHES OF CONTRACT OR WARRANTIES BY LPA,</strong> resulting in personal injury, accidents, illnesses (including death), or property damage or monetary loss, whether to me, any PARTICIPANT, or any third party, arising from my or any PARTICIPANT's participation in, or observation of, the use of baseball, weight room and training facilities, training services or equipment provided by LPA.
            </p>

            <p>
              <strong className="text-foreground/80">I UNDERSTAND THAT BY SIGNING THIS WAIVER OF LIABILITY, THAT I AM GIVING UP SUBSTANTIAL RIGHTS, INCLUDING MY RIGHT TO SUE.</strong> I acknowledge that I am signing this waiver of liability, freely and voluntarily, and that I <strong className="text-foreground/80">INTEND BY MY SIGNATURE, FOR THIS TO BE A COMPLETE AND UNCONDITIONAL RELEASE OF ALL LIABILITY</strong> to the greatest extent allowed by law.
            </p>

            <div>
              <h3 className="font-bebas text-xl text-foreground/80 mb-2">1. Assumption of Risk</h3>
              <p>
                I understand that baseball, weight lifting, exercise, and training are physical activities that, by their very nature carry certain <strong className="text-foreground/80">INHERENT RISKS OF INJURY THAT CANNOT BE ELIMINATED</strong> regardless of the care taken to avoid injuries. The use LPA's facilities, training services, weight room, exercise room, and equipment of any kind or nature involves close encounters with solid, fast moving objects and projectiles, such bats and hard balls. Also baseball activities involve strenuous exertions of physical strength, use of various and multiple muscle groups, quick movement involving speed and change of direction, and sustained physical activity placing stress on joints and the cardiovascular system. The use of LPA's facilities, training services, and equipment during these activities does not guarantee my safety. Even with the use of protective equipment, injuries relating to this type of activity may still occur as a result of factors outside of LPA's control. For example, the use of equipment not provided by LPA, the level of alertness, physical condition or athletic skill, are some of the factors that may contribute to the potential for a participant's injury. The specific risks of injury that may occur engaging in baseball activities vary greatly, but a non-exhaustive list of examples of potential injuries include and are not limited to: 1) minor injuries such as scratches, bruises, and sprains; 2) serious injuries such as broken bones, broken teeth, concussion, eye injuries or loss of eyesight, joint injuries, back injuries or heart attacks; and 3) catastrophic injuries, including paralysis and death. I also understand that while cleaning procedures may reduce their presence, natural pathogens including but not limited to bacteria, viruses, mold and mildew of all sort may be present at LPA, that I may be exposed to same while at LPA and that those natural pathogens may cause me illness or other bodily injury. I understand and agree that LPA provides its baseball facilities and equipment in an <strong className="text-foreground/80">AS IS CONDITION, WITHOUT WARRANTY OR GUARANTEE</strong> that a specific facility or piece of equipment will eliminate a participant's risk for injury, or that a specific facility or piece of equipment has been inspected or tested by LPA prior to each individual participant's use. I understand that LPA <strong className="text-foreground/80">DOES NOT INSPECT OR TEST EACH PIECE OF EQUIPMENT (OR PROTECTIVE CAGING) PRIOR TO EACH PARTICIPANT'S USE.</strong> I <strong className="text-foreground/80">HAVE READ THE PREVIOUS PROVISIONS AND I KNOW, UNDERSTAND, APPRECIATE THESE AND OTHER RISKS THAT ARE INHERENT</strong> in the use of facilities, training services and equipment provided by LPA. I hereby <strong className="text-foreground/80">ASSERT THAT MY PARTICIPATION IN THE USE OF LPA PROVIDED FACILITIES, TRAINING SERVICES AND EQUIPMENT IS VOLUNTARY, AND THAT I KNOWINGLY ASSUME ALL SUCH RISKS.</strong>
              </p>
            </div>

            <div>
              <h3 className="font-bebas text-xl text-foreground/80 mb-2">2. Additional Helmet Waiver of Liability</h3>
              <p>
                I understand that for my safety LPA requires me to wear a helmet when using the facilities, training services and equipment. In consideration of LPA waiving the requirement to wear a helmet when I use the tee or slow pitch base batting or pitching cages (whether being pitched by machine or person) I agree to the following: In consideration of being permitted to use today, the facilities, training services, and equipment provided by LPA, I, for myself, my players, coaches, heirs, personal representatives or assigns, <strong className="text-foreground/80">ASSUME THE RISK OF NOT WEARING A HELMET, AND DO HEREBY RELEASE, WAIVE, DISCHARGE, AND COVENANT NOT TO SUE LPA</strong> or any of the LPA PARTIES, from liability <strong className="text-foreground/80">FROM ANY AND ALL CLAIMS, INCLUDING CLAIMS RELATED TO ALLEGED NEGLIGENCE OR BREACHES OF CONTRACT OR WARRANTIES BY LPA,</strong> resulting in personal injury, accidents, illnesses (including death), or property damage or monetary loss, arising from my not using a helmet in my participation in the use of the facilities, training services or equipment provided by LPA. I agree to <strong className="text-foreground/80">INDEMNIFY AND HOLD LPA AND THE LPA PARTIES HARMLESS</strong> from any and all claims, actions, suits, procedures, costs, expenses, damages and liabilities, including attorney's fees, brought as a result of my use of LPA provided facilities, training services or equipment without a helmet.
              </p>
            </div>

            <div>
              <h3 className="font-bebas text-xl text-foreground/80 mb-2">3. Indemnification and Hold Harmless</h3>
              <p>
                I agree to <strong className="text-foreground/80">INDEMNIFY AND HOLD LPA AND THE LPA PARTIES HARMLESS</strong> from any and all claims, actions, suits, procedures, costs, expenses, damages and liabilities, including attorney's fees, brought minors of whom I am the parent or guardian or have responsibility for and guests accompanying me, or any players, coaches or other third party, as a result of my actions or the actions of minors of whom I am the parent or guardian or have responsibility for or guests accompanying me, including their use of LPA provided facilities, training services, weight room, exercise room, or equipment of any kind or nature. As part of this indemnification agreement, I acknowledge and agree that I am responsible for conduct and behavior of all minors and guests that accompany me regardless of whether or not they use the facilities, training services, or equipment. I agree to reimburse LPA for all costs, expenses or fees or damages incurred by LPA, including damages to the facility and equipment, arising out of my conduct or the conduct of any minors, players, coaches, and guests that accompany me.
              </p>
            </div>

            <div>
              <h3 className="font-bebas text-xl text-foreground/80 mb-2">4. Safety</h3>
              <p>
                LPA may prescribe safety guidelines and instructions. I agree to comply with all of LPA's safety rules, procedures and requirements, including but not limited to wearing protective gear. I understand that failure to comply may result LPA's terminating my use of the facilities, training services, and equipment and requiring me to leave the premises, at LPA's sole and absolute discretion.
              </p>
            </div>

            <div>
              <h3 className="font-bebas text-xl text-foreground/80 mb-2">5. Governing Law, Venue and Jurisdiction</h3>
              <p>
                The undersigned understands and agrees that this Waiver of Liability Agreement is intended to be as broad and inclusive as permitted under applicable law and shall be governed by Arizona law, without giving effect to choice of law principles that would require the application of any other jurisdiction's law. In the event a Participant/Minor Participant is not a resident of the State of Arizona, such Participant/Minor Participant, and such Minor Participant's parent(s) or guardian(s) expressly consent to the application of Arizona law and to the exclusive venue and jurisdiction of the Courts as set forth in this Section. In the event of a dispute, the exclusive venue and jurisdiction for any lawsuit arising out of such dispute shall be the Superior Court of the State of Arizona in and for the County of Maricopa.
              </p>
            </div>

            <div>
              <h3 className="font-bebas text-xl text-foreground/80 mb-2">6. Severability</h3>
              <p>
                If any provision of this Waiver of Liability Agreement is determined to be invalid for any reason, such invalidity shall not affect the validity of any of the other provisions, which other provisions shall remain in full force and effect as if this document has been executed with the invalid provision eliminated.
              </p>
            </div>

            <div>
              <h3 className="font-bebas text-xl text-foreground/80 mb-2">7. Further Acknowledgement of Understanding</h3>
              <p>
                I have read this Waiver of Liability Agreement. I fully understand its terms. <strong className="text-foreground/80">I UNDERSTAND THAT BY SIGNING THIS WAIVER OF LIABILITY AGREEMENT THAT I AM GIVING UP SUBSTANTIAL RIGHTS, INCLUDING MY RIGHT TO SUE.</strong> I acknowledge that I am signing this waiver of liability agreement freely, and voluntarily, and that I <strong className="text-foreground/80">INTEND BY MY SIGNATURE, FOR THIS TO BE A COMPLETE AND UNCONDITIONAL RELEASE OF ALL LIABILITY</strong> to the greatest extent allowed by law.
              </p>
            </div>

            <div className="border-t border-border/20 pt-6">
              <h3 className="font-bebas text-xl text-primary mb-2">Electronic Signature Acknowledgment</h3>
              <p>
                By typing my full name and submitting the electronic Liability Waiver Form below, I intend to sign this Liability Waiver electronically and agree that my electronic signature is the legally binding equivalent to my handwritten signature. I agree that my electronic signature binds myself and the Organization (if representing a group or organization) and all individuals I bring to the LPA facility or programs, including future participants, unless revoked in writing. I further acknowledge that I have read and fully understand the terms of this Waiver in its entirety and that, by electronically signing, I knowingly and voluntarily release LPA and the LPA PARTIES from liability to the maximum extent permitted by law. This electronic signature is governed by the Uniform Electronic Transactions Act (UETA) and the federal Electronic Signatures in Global and National Commerce Act (E-SIGN Act).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GHL Embedded Form */}
      <section className="py-16 md:py-24 border-t border-border/20">
        <div className="container mx-auto px-6 lg:px-16 max-w-4xl">
          <h2 className="font-bebas text-3xl md:text-4xl text-primary uppercase text-center mb-8">E-Sign Form</h2>
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/hZVAkXCko233qGzuN0KR"
            style={{ width: "100%", height: "1855px", border: "none", borderRadius: "3px" }}
            id="inline-hZVAkXCko233qGzuN0KR"
            data-layout='{"id":"INLINE"}'
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Liability Waiver"
            data-height="1855"
            data-layout-iframe-id="inline-hZVAkXCko233qGzuN0KR"
            data-form-id="hZVAkXCko233qGzuN0KR"
            title="Liability Waiver"
          />
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default LiabilityWaiver;