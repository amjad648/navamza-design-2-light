import { Mail, Phone, MapPin, Globe, Shield, Clock } from "lucide-react";

export default function ContactFooter() {
  return (
    <footer id="contact" className="border-t border-brand-grey-200 bg-brand-grey-50 pt-20 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Contact Coordinates Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
          
          {/* Brand Info (5 Cols) */}
          <div className="md:col-span-5 space-y-4">
            <img src="/assets/logo-prism.svg" alt="Navamza" className="h-10 w-auto" />
            <p className="text-sm text-brand-grey-600 leading-relaxed max-w-sm">
              Navamza is an independent digital product lab and IT engineering studio building high-performance mobile and web solutions.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-brand-grey-500">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Online • Operating Worldwide</span>
            </div>
          </div>

          {/* Direct Channels (4 Cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-semibold tracking-wider text-brand-blue-700 uppercase mb-4">
              Direct Contact
            </h4>
            <div className="flex items-center gap-3 text-sm text-brand-grey-700">
              <div className="w-8 h-8 rounded-lg bg-white border border-brand-grey-200 flex items-center justify-center text-brand-blue-600">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] text-brand-grey-400 font-mono">PRIMARY INQUIRIES</div>
                <div className="font-semibold">contact@navamza.com</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm text-brand-grey-700 pt-1">
              <div className="w-8 h-8 rounded-lg bg-white border border-brand-grey-200 flex items-center justify-center text-brand-blue-600">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] text-brand-grey-400 font-mono">TELEPHONE</div>
                <div className="font-semibold">+1 (555) 382-9104</div>
              </div>
            </div>
          </div>

          {/* Office & Operations (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-semibold tracking-wider text-brand-blue-700 uppercase mb-4">
              Headquarters
            </h4>
            <div className="text-sm text-brand-grey-700 leading-relaxed">
              <div className="font-semibold text-brand-grey-900">Navamza Technologies Inc.</div>
              <div className="text-brand-grey-500 text-xs mt-1">
                100 Innovation Way, Suite 400<br />
                San Francisco, CA 94107
              </div>
            </div>
            <div className="pt-2 text-xs font-mono text-brand-blue-600 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>PST (UTC-8) Timezone</span>
            </div>
          </div>

        </div>

        {/* Subfooter */}
        <div className="pt-8 border-t border-brand-grey-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-grey-500">
          <div>
            &copy; {new Date().getFullYear()} Navamza Technologies Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-brand-blue-600 transition-colors cursor-pointer">Privacy Notice</span>
            <span className="hover:text-brand-blue-600 transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-brand-blue-600 transition-colors cursor-pointer">Security Standards</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
