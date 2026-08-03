#!/usr/bin/env python3
"""
Club K9 — local preview server.

Run it, then open http://localhost:8000

Why this exists instead of the usual `python3 -m http.server`:
that one sends no caching instructions, so browsers hang on to
styles.css and script.js and a normal refresh shows stale styling.
This one tells the browser "never cache", so a plain refresh
(Cmd+R) always shows your latest changes. No Cmd+Shift+R needed.

Stop it with Ctrl+C.
"""
import http.server
import os
import socketserver
import sys

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8000

# always serve the folder this script lives in
os.chdir(os.path.dirname(os.path.abspath(__file__)))


class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

    def log_message(self, fmt, *args):
        # keep the terminal quiet apart from errors
        if not args or not str(args[0]).startswith(("GET", "HEAD")):
            super().log_message(fmt, *args)


class Server(socketserver.TCPServer):
    allow_reuse_address = True   # lets you restart straight away


if __name__ == "__main__":
    try:
        with Server(("127.0.0.1", PORT), NoCacheHandler) as httpd:
            print(f"\n  🐾 Club K9 preview running at http://localhost:{PORT}")
            print("     Press Ctrl+C to stop.\n")
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n  Preview stopped.\n")
    except OSError as e:
        print(f"\n  Couldn't start on port {PORT}: {e}")
        print(f"  Something else may already be using it. Try: python3 serve.py 8001\n")
        sys.exit(1)
