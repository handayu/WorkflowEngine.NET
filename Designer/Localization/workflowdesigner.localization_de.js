 var WorkflowDesignerConstants = {
  ActivityColor: "#ECF0F1",
  ActivityTextColor: "#2D3436",
  ActivityInitialColor: "#27AE60",
  ActivityInitialTextColor: "#FFFFFF",
  ActivityFinalColor: "#2980B9",
  ActivityFinalTextColor: "#FFFFFF",
  ActivityShape: "#CECECE",
  SelectColor: "#F39C12",
  SelectTextColor: "#FFFFFF",
  SelectSubProcessColor: "#e3b015",
  SelectSubProcessTextColor: "#FFFFFF",
  ButtonActive: "#D4D8D9",
  BarColor: "#EDF1F2",
  BarSeparatorColor: "#D9DEE0",
  DeleteConfirm: "Sind Sie sicher, dass Sie gewählten Einträge löschen möchten?",
  DeleteConfirmCurrent: "Sind Sie sicher, dass Sie diesen Eintrag löschen möchten?",
  FieldIsRequired: "Feld ist erforderlich!",
  FieldMustBeUnique: "Feld muss eindeutig sein!",
  ButtonTextDelete: "Löschen",
  ButtonTextCreate: "Erstellen",
  ButtonTextSave: "Speichern",
  ButtonTextYes: "Ja",
  ButtonTextNo: "Nein",
  ButtonTextOk: "Ok",
  ButtonTextCancel: "Abbrechen",
  ButtonTextClose: "Schließen",
  ButtonTextUndo: "Rückgängig machen",
  ButtonTextRedo: "Wiederholen",
  SaveConfirm: "Änderungen speichern?",
  CloseWithoutSaving: "Änderungen verwerfen?",
  TransitionAuto: "Auto",
  DialogConfirmText: "Frage",
  AlertTitle: "Warning",
  None: "Keiner",
  Warning: "Warnung",
  SwitchToExpertMode: "Switch To Expert Mode",
  SwitchToDefaultMode: "Switch To Default Mode",
  InfoBlockLabel: {
    Activity: "Aktivitäten:",
    Transition: "Übergänge:",
    Command: "Befehle:"
  },
  ActivityNamePrefix: "Aktivität_",
  ActivityFormLabel: {
    Title: "Aktivität",
    TitleForInline: "Aktivität (eingebettet)",
    Name: "Name",
    State: "Zustand",
    IsInitial: "Initial",
    IsFinal: "Final",
    IsForSetState: "Für gesetzten Zustand",
    IsAutoSchemeUpdate: "Automatisches Schema-Update",
    DisablePersist: "Disable persist",
    Implementation: "Implementierung",
    PreExecutionImplementation: "Implementierung Vorabausführung",
    ImpOrder: "Reihenfolge",
    ExecutionTimeoutLabel: "Execution timeout",
    ExecutionTimeoutWarning: "Execution timeout works only with async actions. Check the cancellation token for proper timeout handling.",
    TimeoutsLabel: "Timeouts",
    TypeLabel: "Type",
    ActivityLabel: "Activity",
    StateLabel: "State",
    RetryCountLabel: "Retry count",
    SetActivityLabel: "SetActivity",
    SetStateLabel: "SetState",
    RetryLabel: "Retry",
    IgnoreLabel: "Ignore",
    AllExceptions: "*",
    IdleTimeoutLabel: "Idle timeout",
    ExceptionsHandling: "Exceptions handling",
    Exceptions: "Exceptions",
    ImpAction: "Aktion",
    ImpActionParameter: "Parameter",
    Annotations: "Anmerkungen",
    AnnotationName: "Name",
    AnnotationValue: "Wert",
    Scheme: "Schema einbetten",
    AlwaysConditionShouldBeSingle: "Die Immer-Bedingung muss die einzige Bedingung sein",
    OtherwiseConditionShouldBeSingle: "Die Andernfalls-Bedingung muss die einzige Bedingung sein"
  },
  Decision: {
    Title: "Decision",
    TitleForInline: "Decision Inline",
    Name: "Name",
    State: "State",
    IsInitial: "Initial",
    IsFinal: "Final",
    IsForSetState: "For set state",
    IsAutoSchemeUpdate: "Auto scheme update",
    Implementation: "Implementation",
    PreExecutionImplementation: "PreExecution Implementation",
    Annotations: "Annotations",
    Scheme: "Inline scheme",
    To: "To activity",
    WhenTrue: "When True",
    WhenFalse: "When False",
    Transition: "Transitions to activities",
    Condition: "Condition",
    ConditionType: "Type",
    ConditionAction: "Action",
    ResultOnPreExecution: "PreExec. Result",
    ConditionActionParameter: "Action parameter",
    ConditionInversion: "Invert result",
    ActionLabel: "Action",
    ExpressionLabel: "Expression"
  },
  DecisionTable: {
    Title: "Decision table",
    TitleForInline: "Decision table Inline",
    Name: "Name",
    State: "State",
    IsInitial: "Initial",
    IsFinal: "Final",
    IsForSetState: "For set state",
    IsAutoSchemeUpdate: "Auto scheme update",
    Implementation: "Implementation",
    PreExecutionImplementation: "PreExecution Implementation",
    Annotations: "Annotations",
    Scheme: "Inline scheme",
    To: "To activity",
    Transition: "Transitions to activities",
    ConditionType: "Type",
    Condition: "Condition",
    Parameters: "Parameters",
    ConditionAction: "Action",
    ResultOnPreExecution: "PreExec. Result",
    ConditionActionParameter: "Action parameter",
    ConditionInversion: "Invert result",
    ActionLabel: "Action",
    ExpressionLabel: "Expression"
  },
  TransitionFormLabel: {
    Title: "Übergang",
    Name: "Name",
    From: "Von der Aktivität",
    To: "Zur Aktivität",
    Classifier: "Klassifizierer",
    Restrictions: "Beschränkungen",
    RestrictionsType: "Art",
    RestrictionsActor: "Anwender",
    Condition: "Bedingung",
    ConditionType: "Art",
    ConditionAction: "Aktion",
    ResultOnPreExecution: "Ergebnis der Vorabausführung",
    Trigger: "Auslöser",
    TriggerType: "Art",
    TriggerAuto: "Auto",
    TriggerCommand: "Befehl",
    TriggerTimer: "Timer",
    ConditionActionParameter: "Parameter",
    ConditionExpression: "Expression",
    ConditionInversion: "Ergebnis umkehren",
    ConditionsConcatenationType: "Bedingungen Verkettungstyp",
    AllowConcatenationType: "Verkettung erlauben als",
    RestrictConcatenationType: "Verkettung einschränken als",
    IsFork: "Ist eine Verzweigung",
    MergeViaSetState: "Teilprozess über gesetzten Zustand zusammenführen",
    DisableParentStateControl: "Deaktivieren Sie die übergeordnete Prozesssteuerung",
    ShowConcatParameters: "Verkettung anzeigen",
    HideConcatParameters: "Verkettung ausblenden",
    Annotations: "Anmerkungen",
    AnnotationName: "Name",
    AnnotationValue: "Wert",
    InlinedFinalActivityName: "Eingebettete Abschlussaktivität",
    Allow: "Allow",
    Restrict: "Restrict",
    ConditionsListShouldNotBeEmpty: "Die Liste der Bedingungen sollte nicht leer sein",
    AlwaysConditionShouldBeSingle: "Always condition should be single",
    OtherwiseConditionShouldBeSingle: "Otherwise condition should be single",
    ConditionalLabel: "Conditional",
    AlwaysLabel: "Always",
    ActionLabel: "Action",
    ExpressionLabel: "Expression",
    OtherwiseLabel: "Otherwise",
    Subprocess: "Subprocess",
    SubprocessNone: "None",
    SubprocessStart: "Start",
    SubprocessFinalize: "Finalize",
    SubprocessAuto: "Auto",
    SubprocessStartSettings: "Subprocess start settings",
    SubprocessFinalizeSettings: "Subprocess finalize settings",
    SubprocessName: "Subprocess name",
    SubprocessId: "Subprocess id",
    SubprocessIdPlaceholder: "Autogenerated GUID",
    SubprocessNamePlaceholder: "Same as transition name",
    SubprocessStartupType: "Subprocess startup type",
    SubprocessStartupTypeSameThread: "Same thread",
    SubprocessStartupTypeAnotherThread: "Another thread",
    SubprocessStartupTypeTimerQueue: "Timer queue",
    SubprocessStartupParameterCopyStrategy: "Parameters copy strategy",
    SubprocessStartupParameterCopyStrategyCopyAll: "Copy all",
    SubprocessStartupParameterCopyStrategyIgnoreAll: "Ignore all",
    SubprocessStartupParameterCopyStrategyCopySpecified: "Copy specified",
    SubprocessStartupParameterCopyStrategyIgnoreSpecified: "Ignore specified",
    SubprocessSpecifiedParameters: "Specified parameters",
    SubprocessFinalizeParameterMergeStrategy: "Parameters merge strategy",
    SubprocessFinalizeParameterMergeStrategyOverwriteAllNulls: "Overwrite all nulls",
    SubprocessFinalizeParameterMergeStrategyOverwriteAll: "Overwrite all",
    SubprocessFinalizeParameterMergeStrategyOverwriteSpecified: "Overwrite specified",
    SubprocessFinalizeParameterMergeStrategyDontOverwriteSpecified: "Don't overwrite specified"
  },
  LocalizationFormLabel: {
    Title: "Lokalisierung",
    ObjectName: "Objektname",
    Type: "Art",
    IsDefault: "Standardwert",
    Culture: "Kultur",
    Value: "Wert",
    Types: [
      "Befehl",
      "Status",
      "Parameter"
    ]
  },
  TimerFormLabel: {
    Title: "Timer",
    Name: "Name",
    Type: "Art",
    Value: "Wert",
    Types: [
      "Befehl",
      "Status",
      "Parameter"
    ],
    OverrideHint: "Den Timer überschreiben, falls er existiert",
    Override: "Überschreiben"
  },
  ParameterFormLabel: {
    Title: "Parameter",
    Name: "Name",
    Type: "Art",
    Purpose: "Zweck",
    Value: "Wert",
    InitialValue: "Ursprünglicher Wert",
    ShowSystemParameters: "Zeige Systemparameter"
  },
  ActorFormLabel: {
    Title: "Anwender",
    Name: "Name",
    Rule: "Regel",
    Value: "Wert",
    ShowPredefinedActors: "Show predefined actors"
  },
  CommandFormLabel: {
    Title: "Befehl",
    Name: "Name",
    InputParameters: "Eingabeparameter",
    InputParametersName: "Name",
    InputParametersIsRequired: "Erforderlich",
    InputParametersParameter: "Parameter",
    InputParametersDefaultValue: "Standard"
  },
  CommandParametersFormLabel: {
    Title: "command parameters",
    InputParametersName: "Name",
    InputParametersIsRequired: "Required",
    InputParametersParameter: "Parameter",
    InputParametersDefaultValue: "Default"
  },
  ProcessInfoFormLabel: {
    Title: "Zusätzliche Parameter",
    IsObsolete: "Veraltet",
    DefiningParameters: "Parameter definieren",
    ProcessParameters: "Parameter verarbeiten",
    SystemParametersTabName: "Systemparameter",
    ProcessParametersTabName: "Prozessparameter",
    HistoryTabName: "Historie",
    TimersTabName: "Timer",
    TagsTabName: "Tags",
    TagsInputPlaceholder: "Start entering a name to add a tag",
    HistoryTabFromLabel: "Von",
    HistoryTabFromStateLabel: "Von Status",
    HistoryTabToLabel: "Nach",
    HistoryTabToStateLabel: "Nach Status",
    HistoryTabExecutorIdLabel: "Ausgeführt von Id",
    HistoryTabActorIdLabel: "Anwender Id",
    HistoryTabTimeLabel: "Zeit",
    HistoryTabStartTimeLabel: "Start Time",
    HistoryTabDurationLabel: "Duration (ms)",
    HistoryTabTriggerNameLabel: "Timer Name",
    HistoryTabTransitionClassifierNameLabel: "",
    ParametersNameLabel: "Name",
    ParametersValueLabel: "Wert",
    TimersTabNameLabel: "Name",
    TimersTabValueLabel: "Wert",
    RootProcess: "Wurzelprozess",
    TagsLabel: "Tags (durch Komma getrennt)",
    GeneralTabLabel: "General",
    ProcessIdLabel: "Process Id"
  },
  DropdownValues: {
    Name: "Name",
    Value: "Value",
    Dropdown: "Dropdown",
    Values: "values"
  },
  CodeActionsFormLabel: {
    Title: "Codeaktionen",
    Name: "Name",
    ActionCode: "Aktionscode",
    CommonUsings: "Common Usings",
    IsGlobal: "Ist global",
    IsAsync: "Asynchron",
    Type: "Art",
    GlobalDeleteMessage: "Sie haben die globale CodeAction gelöscht. <br/><b> Andere Schemata können diese CodeAction nicht aufrufen! </b>",
    UnGlobalMessage: "Sie haben den Status des globalen Flags geändert. <br/> Nach dem Speichern dieses Schemas wird auf der Grundlage dieser globalen CodeAction eine lokale CodeAction erstellt.",
    EditParameters: "Parameter editieren",
    Parameters: "Parameter",
    Text: "Text",
    TextArea: "TextArea",
    Number: "Zahl",
    Checkbox: "Auswahlbox",
    Dropdown: "Auswahlliste",
    MultiSelect: "MultiSelect",
    DateTime: "Datum/Uhrzeit",
    Values: "Werte",
    DropdownName: "Name",
    DropdownValue: "Wert",
    DropdownShouldContainValues: "Die Auswahlliste sollte Einträge enthalten",
    IsRequired: "Benötigt",
    DefaultValue: "Standardwert",
    Json: "Json",
    TitleField: "Title"
  },
  EditParametersFormlabel: {
    Title: "Parameterwerte editieren",
    NumberRequired: "Muss ein numerischer Wert sein",
    DateShouldBeInISOFormat: "Der Datums-/Zeitwert sollte dem ISO8601-Format entsprechen",
    SwitchToJson: "Zum JSON-Editor wechseln",
    SwitchToConstructor: "Zum Parameter-Editor wechseln",
    InvalidJson: "Das JSON-Object ist ungültig oder entspricht nicht dem Modell",
    IncorrectForm: "Your form contains greater than one element, and at least one element doesn't have a Name. Please specify the Name for each element."
  },
  ToolbarLabel: {
    CreateActivity: "Aktivität erstellen",
    CreateInline: "Eingebettete Aktivität erstellen (Vorlage)",
    CopySelected: "Ausgewählte kopieren",
    Undo: "Rückgängig machen",
    Redo: "Wiederholen",
    Move: "Bewegung",
    ZoomIn: "Hineinzoomen",
    ZoomOut: "Rauszoomen",
    FitToScreen: "Fit to screen",
    ZoomTo100: "Set zoom to 100%",
    FullScreen: "Vollbildschirm",
    Refresh: "Aktualisierung",
    AutoArrangement: "Automatische Anordnung",
    Actors: "Anwender",
    Commands: "Befehle",
    Parameters: "Parameter",
    Localization: "Lokalisierung",
    Timers: "Auslöser",
    AdditionalParameters: "Zusätzliche Parameter",
    CodeActions: "Codeaktionen",
    Info: "Erweiterte Info",
    Delete: "Löschen",
    Clone: "Duplizieren",
    Settings: "die Einstellungen",
    CreateTransition: "Erstellen Sie einen Übergang",
    CreateActivityTransition: "Erstellen Sie eine Aktivität und einen Übergang",
    Legend: "Legende",
    ProcessInfo: "Prozessinformationen",
    Inline: "Das Schema kann eingebettet werden",
    Elements: "Elements",
    Library: "Library",
    ResetSettings: "Reset settings",
    ZoomPositionDefault: "Auf Standard zoomen"
  },
  LibraryLabel: {
    PluginRequired: "Plugin required:"
  },
  Logs: {
    Label: "Logs",
    ParamName: "LogEnabled",
    Description: "This parameter is the default value for logging processes based on this scheme"
  },
  ErrorActivityIsInitialCountText: "Eine Aktivität muss als Initial gekennzeichnet sein",
  ErrorActivityIsFinalCountText: "Dieses Schema ist eingebettet. Eine oder mehrere Aktivitäten müssen als final gekennzeichnet sein.",
  ErrorReadOnlySaveText: "Im ReadOnly-Modus können Änderungen im Designer nicht gespeichert werden.",
  ErrorInvalidObjectsSaveText: "Das Schema kann nicht gespeichert werden. Die folgenden Objekte sind in einem ungültigen Zustand",
  BrokenReferencesDialogText: "This schema contains references to ELEMENTS that aren't defined by this schema or current action providers. Do you want to keep them?",
  EditCodeSettings: {
    Height: 600,
    Width: 1000,
    CodeHeight: 390,
    MessageBoxHeight: 400,
    MessageBoxWidth: 600,
    SuccessBoxHeight: 150,
    SuccessBoxWidth: 300
  },
  EditCodeLabel: {
    Title: "Code bearbeiten",
    EditCodeButton: "Code bearbeiten",
    Usings: "Verweise",
    Compile: "Kompilieren",
    CompileSucceeded: "Kompilierung erfolgreich.",
    Success: "Erfolg",
    Error: "Fehler",
    OK: "OK",
    ShowUsings: "Verweise anzeigen",
    HideUsings: "Verbergen"
  },
  EditJSONLabel: {
    Title: "Bearbeiten Sie den Wert in JSON-Format",
    CreateEmptyType: "Erstellen",
    Format: "Format"
  },
  EditExpressionSettings: {
    Height: 600,
    Width: 1000,
    CodeHeight: 390,
    MessageBoxHeight: 400,
    MessageBoxWidth: 600,
    SuccessBoxHeight: 150,
    SuccessBoxWidth: 300
  },
  EditExpressionLabel: {
    Title: "Edit expression",
    Validate: "Validate",
    Succeeded: "Expression is valid.",
    Success: "Success",
    Error: "Error",
    OK: "OK"
  },
  Elements: {
    Header: "Elements",
    BasicActivity: "Basic Activity",
    BasicActivityDesc: "It determines a state and the order, in which Actions are executed in your process.",
    InlineHeader: "Inline",
    InitialActivity: "Initial Activity",
    InitialActivityDesc: "It a initial state.",
    FinalActivity: "Final Activity",
    FinalActivityDesc: "It a final state."
  },
  OverviewMap: {
    show: true,
    width: 300,
    height: 150
  },
  UndoDepth: 200,
  DefaultCulture: "de-de",
  ErrorInBrowserConsole: "Weitere Informationen sehen Sie in der Browserconsole.",
  EditJSONSettings: {
    Height: 600,
    Width: 1000,
    CodeHeight: 480
  }
};