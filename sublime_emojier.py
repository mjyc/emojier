from subprocess import Popen, PIPE, STDOUT
import sublime
import sublime_plugin


class EmojierCommand(sublime_plugin.TextCommand):
    def run(self, edit, args=[]):
        p = Popen(
            ['{path_to}/bin/node',
                '{path_to}/emojier'] + args,
            stdin=PIPE,
            stdout=PIPE,
            stderr=STDOUT
        )
        region = sublime.Region(0, self.view.size())
        # Get all text
        sin = self.view.substr(region).rstrip()
        # Run emojier
        bout = p.communicate(input=sin.encode('utf-8'))[0]
        self.view.replace(edit, region, bout.decode('utf-8'))
